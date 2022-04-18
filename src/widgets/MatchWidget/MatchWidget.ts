interface IMatchWidget {
  'match-id'?: string
}

export class MatchWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.attachStyles();
    this.render();
  }

  get props(): IMatchWidget {
    return this.getAttributeNames().reduce((acc: any, attributeName: string) => {
      acc[attributeName] = this.getAttribute(attributeName);
      return acc;
    }, {})
  }

  render() {
    const template = document.createElement('div');
    template.classList.add('container')

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container')

    const flag = document.createElement('div');
    flag.classList.add('flag');
    const leagueImg = document.createElement('img');
    leagueImg.setAttribute('src', 'https://storage.googleapis.com/sportxpert-production-bucket/competition_fbf8bce1-e51a-4c2f-99c6-79aaebcd52a5.png');
    leagueImg.setAttribute('height', '18');
    const leagueName = document.createElement('span');
    leagueName.innerHTML = 'Premier League';
    headerContainer.appendChild(flag);
    headerContainer.appendChild(leagueImg);
    headerContainer.appendChild(leagueName);

    const badgeContainer = document.createElement('div');
    badgeContainer.classList.add('bagde-container')

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('content-container')

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container')

    template.appendChild(headerContainer);
    template.appendChild(badgeContainer);
    template.appendChild(contentContainer);
    template.appendChild(footerContainer);
    this.shadowRoot?.appendChild(template)
  }

  attachStyles() {
    const style: HTMLStyleElement = document.createElement('style');
    style.innerHTML = `
      .container {
        width: 260px;
        border-width: 3px 1px 1px;
        border-style: solid;
        border-color: rgb(8, 142, 25) rgb(236, 236, 236) rgb(236, 236, 236);
        border-image: initial;
      }
      .header-container {
        display: flex;
        background-color: rgb(236, 236, 236);
        height: 21px;
      }
      .header-container * + * {
        margin-left: 10px;
      }
      .badger-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 180px;
        height: 24px;
        padding: 0px 20px;
        margin: 0px auto;
        background-color: blue;
      }
      .flag {
        height: 21px;
        width: 40px;
        background-image: url(https://storage.googleapis.com/sportxpert-production-bucket/area_80f6e719-d916-4213-8bc2-f96d4c8321f6.jpg);
        background-size: cover;
      }
      .content-container {
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
        padding: 0px 12px 12px;
      }
      .footer-container {
        padding: 6px 0px;
        position: relative;
        border-top: 1px solid rgb(236, 236, 236);
        z-index: 2;
      }
    `;
    this.shadowRoot?.appendChild(style);
  }
}
