import { ApiResponse } from "./interfaces/api-response.interface";
export default class MatchWidget extends HTMLElement {
    data?: ApiResponse | null;
    constructor();
    get props(): any;
    render(): void;
    attachStyles(): void;
    handleIncidentsClick(): void;
    fetchData(id: string): Promise<ApiResponse | null>;
}
