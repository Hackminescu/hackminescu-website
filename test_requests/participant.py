import requests
import json

r = requests.post("http://localhost:8000/participant-registration",
    data = json.dumps({
        "participants": [
            {
                "name": "Adi",
                "class": "12E",
                "phone_number": "072",
                "email": "adi@g.com"
            }
        ],
        "project_name": "Hackminescu",
        "project_description": "Description"
    })
)
