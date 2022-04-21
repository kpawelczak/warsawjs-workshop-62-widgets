interface IMatchWidget {
    'match-id'?: string;
}
export declare class MatchWidget extends HTMLElement {
    constructor();
    get props(): IMatchWidget;
    handleIncidentsButtonClick(): void;
    render(): void;
    attachStyles(): void;
}
export {};
