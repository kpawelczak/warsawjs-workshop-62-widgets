// match-widget.stories.js

import { html } from 'lit-html';

import '../index';

export default {
  title: 'Match Widget',
};

interface Props {
  matchId: string
}

export const Template = ({ matchId }: Props) => {
  return html`<match-widget match-id=${matchId}></match-widget>`
};
Template.args = {
  'matchId': 'ec827ab4-da1b-46bf-9535-fecbabab8ec8'
}
