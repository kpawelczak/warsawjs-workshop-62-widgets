interface IMatchWidget {
    'match-id'?: string;
}
export declare class MatchWidget extends HTMLElement {
    constructor();
    get props(): IMatchWidget;
    render(): void;
    attachStyles(): void;
}
export {};
