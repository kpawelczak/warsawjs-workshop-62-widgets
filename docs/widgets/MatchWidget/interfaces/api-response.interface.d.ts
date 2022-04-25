import { MatchEvent } from "./match-event.interface";
import { Season } from "./season.interface";
import { Team } from "./team.interface";
export interface ApiResponse {
    event: MatchEvent;
    away: Team;
    home: Team;
    season: Season;
}
