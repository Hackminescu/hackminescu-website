import requests
import json

r = requests.post("http://localhost:8000/participant-registration",
    data = json.dumps({
            "spectator_name": "A"
        }),
    headers = {
        "Content-Type": "application/json",
        "registration_type": "Spectator"
    }
)
