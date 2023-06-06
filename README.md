# postcss-px-to-rem

转换 px 为 rem

## 安装

```bash
pnpm add -D @lingjhf/postcss-px-to-rem 
# with npm
npm install -D @lingjhf/postcss-px-to-rem
```

## 使用

```js
import { PostcssPxToRem } from '@lingjhf/postcss-px-to-rem'

export const config = {
  plugins: [
    PostcssPxToRem({
      baseFontSize: 16 //默认16px
    })
  ]
}
```
