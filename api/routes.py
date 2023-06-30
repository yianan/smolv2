```python
from flask import Flask, request, jsonify
from server import app

@app.route('/newChat', methods=['POST'])
def new_chat():
    # handle new chat creation here
    return jsonify({'status': 'success'})

@app.route('/sendMessage', methods=['POST'])
def send_message():
    # handle sending message here
    data = request.get_json()
    return jsonify({'status': 'success', 'message': data['message']})

@app.route('/abortChat', methods=['POST'])
def abort_chat():
    # handle aborting chat here
    return jsonify({'status': 'success'})
```