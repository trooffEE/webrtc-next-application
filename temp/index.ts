type Immutable<T> = { readonly [P in keyof T]: T[P] };
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions
// as const - Крутая штука!