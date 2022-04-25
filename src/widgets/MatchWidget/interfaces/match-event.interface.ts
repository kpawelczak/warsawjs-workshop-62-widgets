export enum EventStatus {
    scheduled = 'scheduled',
    live = 'live',
    finished = 'finished',
    finishedAfterExtraTime = 'finishedAfterExtraTime',
}
export enum EventStatusName {
    'Not started' = 'Not started',
    '1st half' = '1st half',
    halftime = 'halftime',
    '2nd half' = '2nd half',
    finished = 'finished',
}

export interface MatchEvent {
    name: string;
    status_name: EventStatusName;
    uuid: string;
    result: string;
    start_date: string;
    status: string;
    coverage_type: string;
}
