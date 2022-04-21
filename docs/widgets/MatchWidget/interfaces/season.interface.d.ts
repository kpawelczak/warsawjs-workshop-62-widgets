export interface Season {
    year: string;
    name: string;
    from: string;
    to: string;
    uuid: string;
    area: {
        badge_url: string;
        area_code: string;
        name: string;
        badge_thumb_url: string;
        uuid: string;
    };
    competition: {
        badge_url: string;
        gender: string;
        type: string;
        area_type: string;
        uuid: string;
        name: string;
        badge_thumb_url: string;
        short_name: string;
        abbrev: string;
    };
}
