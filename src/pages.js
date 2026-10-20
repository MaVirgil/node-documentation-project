import naiveRender from './naiveRender/index.js';
import path from 'node:path';

const viewsPath = path.resolve('views');

const baseTemplate = naiveRender.fromTemplate(
  `${viewsPath}/templates/base.html`,
).withFragment(`${viewsPath}/fragments/components/footer.html`, 'footer');

const proseTemplate = baseTemplate
  .withStylesheet('/global/styles/prism.css')
  .withStylesheet('/global/styles/article.css')
  .withScript('/global/scripts/prism.js', {
    defer: false,
  });

const frontPage = baseTemplate
  .withFragment(`${viewsPath}/fragments/frontpage.html`, 'content')
  .withStylesheet('/pages/frontpage/style/frontpage.css')
  .withProps({
    title: 'Node So Far',
  });

const nodeBasics = proseTemplate
  .withFragment(`${viewsPath}/fragments/node-basics.html`, 'content')
  .withFragment(`${viewsPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | basics',
  });

const javascriptIntro = proseTemplate
  .withFragment(`${viewsPath}/fragments/javascript-introduction.html`, 'content')
  .withFragment(`${viewsPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | Javascript Introduction',
  });

const arraysAndObjects = proseTemplate
  .withFragment(`${viewsPath}/fragments/arrays-and-objects.html`, 'content')
  .withFragment(`${viewsPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | Arrays and Objects',
  });

const functions = proseTemplate
  .withFragment(`${viewsPath}/fragments/functions.html`, 'content')
  .withFragment(`${viewsPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | Functions',
  });

const devTools = proseTemplate
  .withFragment(`${viewsPath}/fragments/dev-tools-node.html`, 'content')
  .withFragment(`${viewsPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | Dev-tools for Node',
  });

const dates = proseTemplate
  .withFragment(`${viewsPath}/fragments/javascript-dates.html`, 'content')
  .withFragment(`${viewsPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | Dates',
  });

const httpBasics = proseTemplate
  .withFragment(`${viewsPath}/fragments/http-basics.html`, 'content')
  .withFragment(`${viewsPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | HTTP basics',
  });

const restAPI = proseTemplate
  .withFragment(`${viewsPath}/fragments/rest-api.html`, 'content')
  .withFragment(`${viewsPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | Designing a REST API',
  });

const webAppWithExpress = proseTemplate
  .withFragment(`${viewsPath}/fragments/web-app-express.html`, 'content')
  .withFragment(`${viewsPath}/fragments/components/backButton.html`, 'backButton')
  .withProps({
    title: 'Node So Far | Creating a web app with Express.js',
  });


export const pages = {
  frontPage,
  nodeBasics,
  javascriptIntro,
  arraysAndObjects,
  functions,
  devTools,
  dates,
  httpBasics,
  restAPI,
  webAppWithExpress,
};