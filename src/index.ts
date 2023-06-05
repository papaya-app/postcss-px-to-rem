import type { AcceptedPlugin } from 'postcss'

export interface PxtoRemOptions {

  /**
   * 1rem = n px
   * @default 16
   */
  baseFontSize?: number
}

export function PostcssPxToRem(options: PxtoRemOptions): AcceptedPlugin {
  const pxRE = /(-?[\.\d]+)px/g
  const { baseFontSize = 16 } = options
  return {
    postcssPlugin: 'postcss-px-to-rem',
    Declaration(decl) {
      if (pxRE.test(decl.value)) {
        decl.value = decl.value.replace(pxRE, (_, p1) => `${p1 / baseFontSize}rem`)
      }
    }
  }
}