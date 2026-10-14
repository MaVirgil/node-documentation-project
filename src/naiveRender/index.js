import fileReader from './util/fileReader.js';
import renderer from './renderer.js';

/**
 * Creates an empty page object
 * @returns {Object} An empty page object
 */
const newPage = () => {
  return createPage();
};

/**
 * Creates a new page object from a base HTML file
 * @param {String} Path The relative path to the HTML file
 * @returns {Object} The new page object
 */
const fromTemplate = (path) => {
  //read file at path and parse into string:
  const htmlString = fileReader.readFromFile(path);
  return createPage(htmlString);
};

function createPage(htmlString = null) {

  const html = htmlString || '';

  return {
    render: () => html,
    withFragment: (fragmentPath, placeholderKey) => withFragment(html, fragmentPath, placeholderKey),
    withProps: (props) => withProps(html, props),
    withStylesheet: (stylesheetUrl) => withStylesheet(html, stylesheetUrl),
    withScript: (scriptUrl, options = null) => withScript(html, scriptUrl, options)
  }
}

function withFragment(baseHtml, fragmentPath, fragmentKey) {

  //TODO: input validation and error handling

  //get content html file from filesystem (should probably be an absolute path)
  const contentToInsert = fileReader.readFromFile(fragmentPath);

  //parse page content and replace {{content}} tag with content HTML without mutating page directly
  const newContent = renderer.insertAtPlaceholder(baseHtml, contentToInsert, fragmentKey);

  //return result as an object
  return createPage(newContent);
}

function withProps(baseHtml, props = null) {
  if (!props) {
    throw new Error('withProps(): props object must not be missing or empty');
  }

  let result = baseHtml;

  Object.entries(props).forEach(([key, value]) => {
    result = renderer.insertAtPlaceholder(result, value, key);
  });

  return createPage(result);
}

function withStylesheet(baseHtml, stylesheetUrl) {
  const result = renderer.insertStylesheet(baseHtml, stylesheetUrl);
  return createPage(result);
}

function withScript(baseHtml, scriptUrl, options) {
  const result = renderer.insertScript(baseHtml, scriptUrl, options);
  return createPage(result);
}

export default {
  newPage,
  fromTemplate
};

//how the renderer should work approx.
// I want to be able to do something like this when I build a page from a template:
/*
const frontPage = renderer.fromTemplate('./pages/templates/base.html')
  .withContent('./pages/content/frontPage.html');

//serve the page:

app.get('/', (req, res) => {
  res.send(frontPage.withProps({title: 'front page'}))  
});
*/
