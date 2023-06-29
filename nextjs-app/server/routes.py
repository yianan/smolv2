```python
from flask import Flask, request, jsonify
from server import app

@app.route('/')
def home():
    return "Home Page"

@app.route('/about')
def about():
    return "About Page"

@app.route('/chatbot', methods=['POST'])
def chatbot():
    message = request.get_json().get('message', '')
    # Here you can process the message and return a response
    response = {"message": "Response from server"}
    return jsonify(response)
```