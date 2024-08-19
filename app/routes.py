from fastapi import APIRouter, HTTPException
from .services import fetch_summoner_data, fetch_champion_data

router = APIRouter()

@router.get("/player/{server}/{summoner_name}")
async def get_player(summoner_name: str, server: str):
    player_data = await fetch_summoner_data(summoner_name, server)
    if "error" in player_data:
        raise HTTPException(status_code=404, detail=player_data["error"])
    return player_data

@router.get("/champion/{champion_name}")
async def get_champion(champion_name: str):
    champion_data = await fetch_champion_data(champion_name)
    if "error" in champion_data:
        raise HTTPException(status_code=404, detail=champion_data["error"])
    return champion_data
