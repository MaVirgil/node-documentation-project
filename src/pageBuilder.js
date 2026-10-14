import naiveRender from './naiveRender/index.js';
import path from 'node:path';

const pagesPath = path.resolve('src/pages');

const frontPage = naiveRender.fromTemplate(`${pagesPath}/templates/base.html`)
  .withFragment(`${pagesPath}/content/frontpage.html`, 'content')
  .withProps({
    title: "Node So Far"
  })
  .withStylesheet('/pages/frontpage/style/frontpage.css');

const basics = naiveRender.fromTemplate(`${pagesPath}/templates/base.html`)
  .withFragment(`${pagesPath}/content/basics.html`, 'content')
  .withProps({
    title: "Node So Far | basics"
  });

export const pages = {
  frontPage,
  basics,
}