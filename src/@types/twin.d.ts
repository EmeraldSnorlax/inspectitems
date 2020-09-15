import 'twin.macro'
import { css as cssProperties } from '@emotion/core'
import styledComponents from '@emotion/styled'
declare module 'twin.macro' {
  const css: typeof cssProperties
  const styled: typeof styledComponents
}
