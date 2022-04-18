const templateString = require('./template.html').default;
const stylesString = require('raw-loader!./style.css').default;

interface IMatchWidget {
  'match-id'?: string
}

export class MatchWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.render();
    this.attachStyles();
  }

  get props(): IMatchWidget {
    return this.getAttributeNames().reduce((acc: any, attributeName: string) => {
      acc[attributeName] = this.getAttribute(attributeName);
      return acc;
    }, {})
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = templateString;
  }

  attachStyles() {
    const style: HTMLStyleElement = document.createElement('style');
    style.innerHTML = stylesString;
    this.shadowRoot?.appendChild(style);
  }
}
