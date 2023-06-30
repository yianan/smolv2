```python
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from models import File
import os

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def handleUpload():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        new_file = File(filename=filename)
        new_file.save()
        return jsonify({'message': 'File uploaded successfully'}), 200

@app.route('/files', methods=['GET'])
def getFiles():
    files = File.query.all()
    return jsonify([file.serialize() for file in files]), 200

@app.route('/delete', methods=['POST'])
def handleDelete():
    data = request.get_json()
    if 'filename' not in data:
        return jsonify({'error': 'No filename provided'}), 400

    file = File.query.filter_by(filename=data['filename']).first()
    if file:
        os.remove(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
        file.delete()
        return jsonify({'message': 'File deleted successfully'}), 200

    return jsonify({'error': 'File not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
```