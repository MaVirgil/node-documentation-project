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
  return createPage(path);
};

function createPage(baseTemplate = null) {
  return {
    html: baseTemplate || '',
  };
}

export default {
  newPage,
  fromTemplate
};
