import { random } from "./random";
import "./styles/index.scss";

declare global {
  interface Window {
    WidgetsLibrary: typeof Widgets;
  }
}

export default class Widgets {
  value: string;
  constructor(el?: string) {
    if (!el) throw Error('Element parameter is required')

    this.value = random();
    const valueElement: HTMLElement | null = document.querySelector(el);
    if (valueElement) valueElement.innerHTML = this.value;
  }
}

window.WidgetsLibrary = Widgets;
