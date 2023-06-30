```python
import os
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = {'pdf', 'txt', 'doc', 'docx', 'ppt', 'pptx'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def save_file(file):
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join('/path/to/upload/directory', filename))
        return True
    return False

def delete_file(filename):
    file_path = os.path.join('/path/to/upload/directory', filename)
    if os.path.exists(file_path):
        os.remove(file_path)
        return True
    return False

def get_all_files():
    files = os.listdir('/path/to/upload/directory')
    return files
```