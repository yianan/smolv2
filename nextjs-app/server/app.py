```python
from flask import Flask
from routes import set_up_routes

app = Flask(__name__)

set_up_routes(app)

if __name__ == "__main__":
    app.run(debug=True)
```