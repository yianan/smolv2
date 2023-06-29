```python
from flask import Flask, request
from routes import chatbot_route

app = Flask(__name__)

@app.route('/')
def home():
    return "Home Page"

@app.route('/about')
def about():
    return "About Page"

@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_input = request.get_json()
    response = chatbot_route(user_input)
    return response

if __name__ == '__main__':
    app.run(debug=True)
```