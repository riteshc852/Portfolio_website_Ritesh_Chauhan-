from flask import Flask, render_template , request , redirect , Blueprint
import os
app = Flask(__name__)

@app.route("/" ,methods=["GET" , "POST" ])
def index():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        print(name)
        print(email)
    return render_template("/Portfolio_website_final/index.html")


if __name__ == "__main__" :
    app.run(debug=True)