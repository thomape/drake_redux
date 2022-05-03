from flask import render_template
from flask_cors import CORS
from drake_back import app


CORS(app, resources={r'/*': {'origins':'*'}})

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')