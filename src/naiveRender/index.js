import fileReader from './util/fileReader.js';
import renderer from './renderer.js';
import { sanitizeXSS } from "./util/sanitizer.js";

/**
 * @typedef {Object} page A page object
 * @property {function(Object?): String} render Returns the page object's HTML as a string. Optionally takes a ``props`` object as a parameter, replacing all placeholders with the corresponding values in the object
 * @property {function(String, String): page} withFragment Adds an HTML-fragment to the page object's HTML string. Returns a new ``page`` object
 * @property {function(Object): page} withProps Adds any amount of props to the HTML of the page object. Returns a new ``page`` object
 * @property {function(String): page} withStylesheet Adds a stylesheet relation to the head of the page object's HTML. Returns a new ``page`` object
 * @property {function(String, Object): page} withScript Adds a script to the head of the page object's HTML. Returns a new ``page`` object
 */

const fromTemplate = (path) => {
  let htmlString;

  try {
    htmlString = fileReader.readFromFile(path);
  } catch(e) {
    throw new Error(`fromTemplate(): ${e.message}`);
  }

  return createPage(htmlString);
};

/**
 * @returns {page}
 */
function createPage(htmlString = null) {

  const html = htmlString || '';

  return {
    render: (props = null) => {
      let toReturn = html;

      if (props) {
        toReturn = withProps(html, props).render();
      }

      return stripUnusedPlaceholders(toReturn);
    },
    withFragment: (fragmentPath, placeholderKey) => withFragment(html, fragmentPath, placeholderKey),
    withProps: (props) => withProps(html, props),
    withStylesheet: (stylesheetUrl) => withStylesheet(html, stylesheetUrl),
    withScript: (scriptUrl, options = null) => withScript(html, scriptUrl, options)
  }
}

function withFragment(baseHtml, fragmentPath, fragmentKey) {

  let newContent; 
  
  try {
    let contentToInsert = fileReader.readFromFile(fragmentPath);
    newContent = renderer.insertAtPlaceholder(baseHtml, contentToInsert, fragmentKey);
  } catch(e) {
    throw new Error(`withFragment(): ${e.message}`);
  }

  return createPage(newContent);
}

function withProps(baseHtml, props = null) {
  if (!props) {
    throw new Error('withProps(): props object must not be missing or empty');
  }

  let result = baseHtml;

  try {
    Object.entries(props).forEach(([key, value]) => {
      result = renderer.insertAtPlaceholder(result, sanitizeXSS(value), key);
    });
  } catch(e) {
    throw new Error(`withProps(): ${e.message}`);
  }

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

function stripUnusedPlaceholders(htmlString) {
  return renderer.stripUnusedPlaceholders(htmlString);
}

export default {
  fromTemplate
};