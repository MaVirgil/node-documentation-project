import naiveRender from './naiveRender/index.js';
import path from 'node:path';

const pagesPath = path.resolve('views');

const baseTemplate = naiveRender.fromTemplate(
  `${pagesPath}/templates/base.html`,
);

const proseTemplate = baseTemplate
  .withStylesheet('/global/styles/prism.css')
  .withStylesheet('/global/styles/article.css')
  .withScript('/global/scripts/prism.js', {
    defer: false,
  });

const frontPage = baseTemplate
  .withFragment(`${pagesPath}/fragments/frontpage.html`, 'content')
  .withStylesheet('/pages/frontpage/style/frontpage.css')
  .withProps({
    title: 'Node So Far',
  });

const nodeBasics = proseTemplate
  .withFragment(`${pagesPath}/fragments/node-basics.html`, 'content')
  .withFragment(`${pagesPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | basics',
  });

const javascriptIntro = proseTemplate
  .withFragment(`${pagesPath}/fragments/javascript-introduction.html`, 'content')
  .withFragment(`${pagesPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | Javascript Introduction',
  });

export const pages = {
  frontPage,
  nodeBasics,
  javascriptIntro,
};