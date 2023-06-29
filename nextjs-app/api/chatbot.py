```python
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    message = request.get_json().get('message', '')
    # Here you can process the message and generate a response using your chatbot logic
    response = "You said: " + message
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(port=5000)
```