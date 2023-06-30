```python
from flask import Blueprint, request
from app import app

routes = Blueprint('routes', __name__)

@app.route('/')
def index():
    return "Welcome to the Home Page"

@app.route('/home')
def home():
    return "This is the Home / About page"

@app.route('/chatbot', methods=['POST'])
def chatbot():
    message = request.get_json()
    # Process the message and return a response
    # This is a placeholder and should be replaced with actual chatbot logic
    return {"response": "This is a placeholder response"}
```