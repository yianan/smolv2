```python
from flask import Flask, request
from flask_cors import CORS
from routes import handleUpload, handleDelete

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload():
    return handleUpload(request)

@app.route('/delete', methods=['POST'])
def delete():
    return handleDelete(request)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```