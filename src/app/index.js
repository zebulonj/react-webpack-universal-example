import styles from './styles.css';

import { first, last } from './name';
import greeting from './greeting';

export default function app() {
  return `<p class="primary">${ greeting }, ${ first } ${ last }!</p>`;
}
