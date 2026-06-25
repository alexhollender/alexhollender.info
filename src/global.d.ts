declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.scss'

// webpack's require.context (used to bulk-import media folders)
interface WebpackRequireContext {
  keys(): string[]
  <T = { default: unknown }>(id: string): T
  resolve(id: string): string
  id: string
}

declare namespace NodeJS {
  interface Require {
    context(
      directory: string,
      useSubdirectories?: boolean,
      regExp?: RegExp
    ): WebpackRequireContext
  }
}
