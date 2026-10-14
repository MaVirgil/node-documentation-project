import configFile from '../naive.config.json' with { type: 'json' };

const syntax = configFile.syntax || '{{ }}';
const scriptDeferDefault = configFile.scriptDeferDefault ?? true;

console.log('loading naiveRender with config:');
console.log('placeholder syntax: ', `"${syntax}"`);
console.log('defer scripts by default: ', scriptDeferDefault);

export const config = {
  syntax,
  scriptDeferDefault,
}