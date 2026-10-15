import configFile from '../naive.config.json' with { type: 'json' };

const syntax = configFile.placeholderSyntax || '{{ }}';
const syntaxUnescaped = configFile.placeholderSyntaxUnescaped || '{!{ }!}';
const scriptDeferDefault = configFile.scriptDeferDefault ?? true;

//validate config values:
let malformed;
let message;

if (syntax.split(' ').length !== 2) {
  malformed = syntax;
  message = `"${syntax}" is not valid placeholder syntax. Syntax must follow the pattern: "<start> <end>"`;
} else if (syntaxUnescaped.split(' ').length !== 2) {
  malformed = syntaxUnescaped;
  message = `"${syntaxUnescaped}" is not valid placeholder syntax. Syntax must follow the pattern: "<start> <end>"`
} else if (typeof scriptDeferDefault !== 'boolean') {
  malformed = scriptDeferDefault;
  message = `"${scriptDeferDefault}" is not a valid value for "scriptDeferDefault" key. Value must be a boolean`;
}

if (malformed) {
  throw new Error(`naiveRender malformed config: ${message}`);
}

console.log('loading naiveRender with config:');
console.log(`placeholder syntax: "${syntax}"`);
console.log(`unescaped placeholder syntax: "${syntaxUnescaped}"`)
console.log('defer scripts by default: ', scriptDeferDefault);

export const config = {
  syntax,
  syntaxUnescaped,
  scriptDeferDefault,
}