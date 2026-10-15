import configFile from '../naive.config.json' with { type: 'json' };

const syntax = configFile.placeholderSyntax || '{{ }}';
const syntaxUnescaped = configFile.placeholderSyntaxUnescaped || '{!{ }!}';
const scriptDeferDefault = configFile.scriptDeferDefault ?? true;

console.log('loading naiveRender with config:');
console.log(`placeholder syntax: "${syntax}"`);
console.log(`unescaped placeholder syntax: "${syntaxUnescaped}"`)
console.log('defer scripts by default: ', scriptDeferDefault);

export const config = {
  syntax,
  syntaxUnescaped,
  scriptDeferDefault,
}