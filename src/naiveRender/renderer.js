import { config } from "./util/configLoader.js";
import { sanitizeXSS } from "./util/sanitizer.js";
import { escapeRegexSymbols } from "./util/regexEscaper.js";

const DEFAULT_SCRIPT_DEFER = config.scriptDeferDefault;

const syntaxArr = config.syntax.split(' ');
const PLACEHOLDER_SYNTAX_START = syntaxArr[0];
const PLACEHOLDER_SYNTAX_END = syntaxArr[1];

const syntaxUnescapedArr = config.syntaxUnescaped.split(' ');
const PLACEHOLDER_SYNTAX_UNESCAPED_START = syntaxUnescapedArr[0];
const PLACEHOLDER_SYNTAX_UNESCAPED_END = syntaxUnescapedArr[1];

function insertFragment(htmlString, value, key) {
  const toInsert = String(value);
  const target = PLACEHOLDER_SYNTAX_UNESCAPED_START + key + PLACEHOLDER_SYNTAX_UNESCAPED_END;

  return insertAtPlaceholder(htmlString, toInsert, target);
}

function insertProp(htmlString, value, key) {
  const toInsert = sanitizeXSS(String(value));
  const target = PLACEHOLDER_SYNTAX_START + key + PLACEHOLDER_SYNTAX_END;

  return insertAtPlaceholder(htmlString, toInsert, target);
}

function insertAtPlaceholder(htmlString, value, target) {
  if (!htmlString.includes(target)) {
    throw new Error(`No placeholder key with value "${target}" found`);
  }

  const result = htmlString.replaceAll(target, value);

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
  //generate regex for matching syntax start and end:
  const syntaxPattern = escapeRegexSymbols(PLACEHOLDER_SYNTAX_START) +
    '[^' + escapeRegexSymbols(PLACEHOLDER_SYNTAX_END.charAt(0)) + ']*' + 
    escapeRegexSymbols(PLACEHOLDER_SYNTAX_END);

  const syntaxEscapedPattern = escapeRegexSymbols(PLACEHOLDER_SYNTAX_UNESCAPED_START) +
    '[^' + escapeRegexSymbols(PLACEHOLDER_SYNTAX_UNESCAPED_END.charAt(0)) + ']*' + 
    escapeRegexSymbols(PLACEHOLDER_SYNTAX_UNESCAPED_END);

  const syntaxEscapedRegExp = new RegExp(syntaxEscapedPattern, 'g');
  const syntaxRegExp = new RegExp(syntaxPattern, 'g');

  //apparently this regex expression is super slow ("super-linear perfomance" according to sonarQube), consider fixing in the future
  const result = htmlString.replace(syntaxRegExp, '').replace(syntaxEscapedRegExp, '');

  return result;
}

export default {
  insertFragment,
  insertProp,
  insertStylesheet,
  insertScript,
  stripUnusedPlaceholders,
};
