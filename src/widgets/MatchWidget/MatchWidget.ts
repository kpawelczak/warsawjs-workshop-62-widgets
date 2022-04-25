import template from './template.handlebars'
import styles from '!raw-loader!./style.css'
import {ApiResponse} from "./interfaces/api-response.interface";

export default class MatchWidget extends HTMLElement {
    data?: ApiResponse | null;

    constructor() {
        super();
        this.attachShadow({mode: 'open'})

        this.fetchData('ec827ab4-da1b-46bf-9535-fecbabab8ec8')
            .then((data) => {
                console.log(data)
            this.data = data
            this.render()
            this.attachStyles()
            this.shadowRoot?.querySelector('button.incidents')
                ?.addEventListener('click', () => this.handleIncidentsClick())
        })
    }

    get props() {
        return this.getAttributeNames().reduce((acc: any, attributeName: string) => {
            acc[attributeName] = this.getAttribute(attributeName)
            return acc
        }, {});
    }

    render() {
        if (this.shadowRoot && this.data) {
            this.shadowRoot.innerHTML = template({...this.data})
        }
    }

    attachStyles() {
        const stylesEl = document.createElement('style')
        stylesEl.innerHTML = styles
        this.shadowRoot?.appendChild(stylesEl)
    }

    handleIncidentsClick() {
        this.shadowRoot?.querySelector('.incidents-container')?.classList.toggle('open')
    }

    async fetchData(id: string): Promise<ApiResponse | null> {
        try {
            const res = await fetch(`https://api.product.sportxpert.no/fixtures/events/${id}`)
            const data = await res.json();

            return data
        } catch {
            return null
        }
    }
}

// customElements.define('match-widget', MatchWidget)
