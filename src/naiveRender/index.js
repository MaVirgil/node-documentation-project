import fileReader from './util/fileReader.js';
import renderer from './renderer.js';

//TODO: add documentation to object methods

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
    //TODO: make render function strip all remaining placeholders from html
    render: () => html,
    withFragment: (fragmentPath, placeholderKey) => withFragment(html, fragmentPath, placeholderKey),
    withProps: (props) => withProps(html, props),
    withStylesheet: (stylesheetUrl) => withStylesheet(html, stylesheetUrl),
    withScript: (scriptUrl, options = null) => withScript(html, scriptUrl, options)
  }
}

function withFragment(baseHtml, fragmentPath, fragmentKey) {

  //TODO: input validation and error handling

  const contentToInsert = fileReader.readFromFile(fragmentPath);

  const newContent = renderer.insertAtPlaceholder(baseHtml, contentToInsert, fragmentKey);

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
  fromTemplate
};