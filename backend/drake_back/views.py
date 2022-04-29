from flask import render_template
from drake_back import app

@app.route('/')
def index():
    return render_template('index.html')