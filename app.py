from flask import Flask, render_template, request, flash, redirect, url_for, session
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timezone

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SECRET_KEY'] = 'your-secret-key-here-change-me-later'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    phone = db.Column(db.String(20), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(timezone.utc))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)


with app.app_context():
    db.create_all()


@app.route("/register", methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form.get('username')
        password = request.form.get('password')
        r_password = request.form.get('r_password')
        email = request.form.get('email')
        phone = request.form.get('phone')

        if not all([name, password, r_password, email, phone]):
            flash('Все поля обязательны для заполнения')
            return render_template('staffRegister.html')

        if password != r_password:
            flash('Пароли не совпадают!')
            return render_template('staffRegister.html')

        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            flash('Пользователь с таким email уже существует!')
            return render_template('staffRegister.html')

        try:
            new_user = User(
                name=name,
                email=email,
                phone=phone
            )
            new_user.set_password(password)

            db.session.add(new_user)
            db.session.commit()

            flash('Регистрация прошла успешно! Теперь войдите в систему.', 'success')
            return redirect(url_for('login'))
            
        except Exception as e:
            db.session.rollback()
            flash(f'Ошибка при регистрации: {str(e)}', 'error')
        
    return render_template('staffRegister.html')

@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        name = request.form.get('name')
        password = request.form.get('password')

        user = User.query.filter_by(name=name).first()

        if user and user.check_password(password):
            session['user_id'] = user.id
            session['user_name'] = user.name

            flash(f'Добро пожаловать, {user.name}!', 'success')
            return redirect(url_for('dashboard'))
        
        else:
            flash('Неверный логин или пароль!', 'error')

    return render_template('staffLogin.html')

@app.route("/dashboard")
def dashboard():
    if 'user_id' not in session:
        flash('Пожалуйста, войдите в систему!', 'error')
        return redirect(url_for('login'))

    user_name = session.get('user_name', 'Пользователь')

    return f'''
    <h1>Личный кабинет</h1>
    <p>Привет, {user_name}!</p>
    <p>Вы успешно вошли в систему.</p>
    <a href="/logout">Выйти</a>
    '''

@app.route("/logout")
def logout():
    session.clear()
    flash('Вы вышли из системы.', 'info')
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)