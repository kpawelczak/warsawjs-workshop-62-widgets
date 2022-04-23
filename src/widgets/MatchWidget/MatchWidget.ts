import { differenceInMinutes, format } from 'date-fns';
import matchWidgetTemplate from './template.handlebars';
import stylesString from 'raw-loader!./style.css';
import { ApiResponse } from './interfaces/api-response.interface';
import { EventStatus, EventStatusName } from './interfaces/event.interface';

interface IMatchWidget {
  'match-id'?: string
}

function htmlToElement(html: string | null): ChildNode | null {
  if(!html) return null;

  const template = document.createElement('template');
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

export class MatchWidget extends HTMLElement {
  data: any;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.attachStyles();
    if (this.props['match-id']){
      this.fetchData(this.props['match-id']).then((data) => {
        this.data = data;
        this.render()
        this.shadowRoot?.querySelector('button.incidents')
          ?.addEventListener('click', this.handleIncidentsClick);
      })
    }
  }

  connectedCallback() {
    // We can move logic from constructor here, but it is not necessary
    // https://stackoverflow.com/questions/59970043/custom-element-setup-constructor-vs-connectedcallback
  }

  disconnectedCallback() {
    this.shadowRoot?.querySelector('button.incidents')
      ?.removeEventListener('click', this.handleIncidentsClick);
  }

  handleIncidentsClick() {
    this.shadowRoot?.querySelector('.incidents-container')?.classList.toggle('open');
  }

  get props(): IMatchWidget {
    return this.getAttributeNames().reduce((acc: any, attributeName: string) => {
      acc[attributeName] = this.getAttribute(attributeName);
      return acc;
    }, {})
  }

  get finishedLabel() {
    switch (this.data.event.status) {
      case EventStatus.finished:
        return 'ft';
    
      default:
        return 'ft';
    }
  }
  get liveLabel() {
    switch (this.data.event.status_name) {
      case EventStatusName.halftime:
        return 'ht';
    
      default:
        return this.currentMinute;
    }
  }

  get currentMinute(): string {
    let calculatedMinutes = differenceInMinutes(new Date(), new Date(this.data.event.start_date));

    switch (this.data.event.status_name) {
      case EventStatusName['1st half']:
        if (calculatedMinutes > 45) {
          return `45 + ${calculatedMinutes - 45}`
        }
      case EventStatusName['2nd half']:
        calculatedMinutes = calculatedMinutes + 15;
        if (calculatedMinutes > 90) {
          return `90 + ${calculatedMinutes - 90}`
        }
    
      default:
        return calculatedMinutes.toString();
    }
  }

  async fetchData(id: string): Promise<ApiResponse | null> {
    try {
      const res = await fetch(`https://api.product.sportxpert.no/fixtures/events/${id}`);
      const data = res.json();
  
      return data;
    } catch {
      return null;
    }
  }

  get badgeData() {
    switch (this.data?.event?.status) {
      case EventStatus.scheduled:
        return {
          label: format(new Date(this.data.event.start_date), 'dd MMMM HH:mm'),
          color: 'orange',
        }
      case EventStatus.live:
        return {
          label: this.liveLabel,
          color: 'green',
        }
      case EventStatus.finished:
        return {
          label: this.finishedLabel,
          color: 'blue',
        }
    
      default:
        return {
          label: 'No information',
          color: 'gray',
        }
    }
  }

  render() {
    if (this.shadowRoot && this.data) {
      const containerElement = this.shadowRoot?.querySelector('.container');
      const elementToRender = htmlToElement(matchWidgetTemplate({
        ...this.data,
        custom: {
          badgeData: this.badgeData,
        }
      }));
      if (!elementToRender) return;

      if (containerElement) {
        containerElement?.replaceWith(elementToRender);
      } else {
        this.shadowRoot.appendChild(elementToRender);
      }
    }
  }

  attachStyles() {
    const style: HTMLStyleElement = document.createElement('style');
    style.innerHTML = stylesString;
    this.shadowRoot?.appendChild(style);
  }
}
