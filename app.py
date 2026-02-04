from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32), nullable=False)
    passsword = db.Column(db.String(128), nullable=False)


@app.route("/login")
def login():
    return render_template('staffLogin.html')

@app.route("/register")
def register():
    return render_template('staffRegister.html')


if __name__ == '__main__':
    app.run(debug=True)