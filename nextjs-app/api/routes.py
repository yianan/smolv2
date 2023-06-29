```python
from flask import Blueprint
from .chatbot import chatbot

routes = Blueprint('routes', __name__)

@routes.route('/chatbot', methods=['POST'])
def chatbot_route():
    return chatbot()
```