import requests
import json

url = "https://a.4cdn.org/b/catalog.json"

r = requests.get(url)

data = r.json()
