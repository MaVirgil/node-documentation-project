import { config } from "./util/configLoader.js";

const DEFAULT_SCRIPT_DEFER = config.scriptDeferDefault;

const syntaxArr = config.syntax.split(' ');
const PLACEHOLDER_SYNTAX_START = syntaxArr[0];
const PLACEHOLDER_SYNTAX_END = syntaxArr[1];

function insertAtPlaceholder(htmlString, value, placeholder) {
  const toInsert = String(value);
  const target = PLACEHOLDER_SYNTAX_START + placeholder + PLACEHOLDER_SYNTAX_END;

  //TODO: throw if placeholder is not found
  const result = htmlString.replace(target, toInsert);

  return result;
}

function insertStylesheet(htmlString, stylesheetUrl) {
  const insertString = `<link rel="stylesheet" href="${stylesheetUrl}"/>`;

  return insertIntoHead(htmlString, insertString);
}

function insertScript(htmlString, scriptUrl, options = null) {
  const shouldDefer = options?.defer ?? DEFAULT_SCRIPT_DEFER;

  const insertString = `<script src="${scriptUrl}" ${shouldDefer ? 'defer' : ''}></script>`;

  return insertIntoHead(htmlString, insertString);
}

function insertIntoHead(htmlString, insertString) {
  const toInsert = `${insertString}
  </head>`;

  return htmlString.replace('</head>', toInsert);
}

function stripUnusedPlaceholders(htmlString) {
  const result = htmlString.replace(/\{\{[^}]*\}\}/g, '');

  return result;
}

export default {
  insertAtPlaceholder,
  insertStylesheet,
  insertScript,
  stripUnusedPlaceholders,
};
