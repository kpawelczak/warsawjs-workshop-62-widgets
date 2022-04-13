import "./styles/index.scss";
declare global {
    interface Window {
        WidgetsLibrary: typeof Widgets;
    }
}
export default class Widgets {
    value: string;
    constructor(el?: string);
}
