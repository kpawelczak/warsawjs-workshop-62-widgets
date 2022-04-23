import { ApiResponse } from './interfaces/api-response.interface';
interface IMatchWidget {
    'match-id'?: string;
}
export declare class MatchWidget extends HTMLElement {
    data: any;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    handleIncidentsClick(): void;
    get props(): IMatchWidget;
    get finishedLabel(): string;
    get liveLabel(): string;
    get currentMinute(): string;
    fetchData(id: string): Promise<ApiResponse | null>;
    get badgeData(): {
        label: string;
        color: string;
    };
    render(): void;
    attachStyles(): void;
}
export {};
