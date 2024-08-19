import requests
from .config import RIOT_API_KEY

async def fetch_summoner_data(summoner_name: str, server: str):
    url = f"https://{server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{summoner_name}"
    headers = {"X-Riot-Token": RIOT_API_KEY}
    response = requests.get(url, headers=headers)
    
    if response.status_code == 200:
        return response.json()
    elif response.status_code == 404:
        return {"error": "Summoner not found."}
    return {"error": "Error fetching summoner data."}

async def fetch_champion_data(champion_name: str):
    url = f"https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/{champion_name}.json"
    response = requests.get(url)
    
    if response.status_code == 200:
        return response.json()["data"].get(champion_name, None)
    return {"error": "Champion not found."}
