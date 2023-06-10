import './style.css';
import { Program } from './program';

const pg = new Program();
pg.run();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="render"></div>
`
