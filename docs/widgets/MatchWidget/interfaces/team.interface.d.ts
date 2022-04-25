import { Incident } from "./incident.interface";
export interface Team {
    incidents: Incident[];
    team_details: TeamDetails;
    name: string;
    uuid: string;
    short_name: string;
    type: string;
    regular_time_score: number;
    first_half_score: number;
}
interface TeamDetails {
    badge_url: string;
    website: string;
    acronym: string;
    displayed_name: string;
    name: string;
    founded: string;
    badge_thumb_url: string;
    short_name: string;
    uuid: string;
}
export {};
