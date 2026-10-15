export function escapeRegexSymbols(string) {
    return string
        .replaceAll('\\', String.raw`\\`)
        .replaceAll('^', String.raw`\^`)
        .replaceAll('$', String.raw`\$`)
        .replaceAll('.', String.raw`\.`)
        .replaceAll('|', String.raw`\|`)
        .replaceAll('?', String.raw`\?`)
        .replaceAll('*', String.raw`\*`)
        .replaceAll('+', String.raw`\+`)
        .replaceAll('(', String.raw`\(`)
        .replaceAll(')', String.raw`\)`)
        .replaceAll('[', String.raw`\[`)
        .replaceAll(']', String.raw`\]`)
        .replaceAll('{', String.raw`\{`)
        .replaceAll('}', String.raw`\}`)
}