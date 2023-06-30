```python
from flask import Flask, request, jsonify
from api.routes import chat_routes

app = Flask(__name__)
app.register_blueprint(chat_routes)

@app.route('/')
def home():
    return "Home Page"

if __name__ == '__main__':
    app.run(debug=True)
```