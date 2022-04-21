import { Event } from "./event.interface";
import { Season } from "./season.interface";
import { Team } from "./team.interface";

export interface ApiResponse {
  event: Event;
  away: Team;
  home: Team;
  season: Season;
}
