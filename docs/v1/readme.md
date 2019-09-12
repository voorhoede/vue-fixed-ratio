# @voorhoede/vue-fixed-ratio

**Force content inside an element to have a fixed ratio. This technique prevents reflow when loading images and other lazy content.**

Read all about it in [Say no to image reflow](https://www.voorhoede.nl/en/blog/say-no-to-image-reflow/).

[[toc]]

## Installation

```
npm install @voorhoede/vue-fixed-ratio
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VueFixedRatio from '@voorhoede/vue-fixed-ratio'

Vue.use(VueFixedRatio)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<script src="@voorhoede/vue-fixed-ratio/dist/vue-fixed-ratio.js"></script>

<!-- From CDN -->
<script src="https://unpkg.com/@voorhoede/vue-fixed-ratio"></script>
```

## Examples

::: demo
<vue-fixed-ratio :height="10" :width="20" :style="{backgroundColor: 'blue'}"></vue-fixed-ratio>
:::

::: demo
<vue-fixed-ratio :height="4" :width="20" :style="{backgroundColor: 'blue'}"></vue-fixed-ratio>
:::

<!-- The API section is auto generated, don't touch please -->

## API

### vue-fixed-ratio 

#### slots 

- `default` 

#### props 

- `height` ***Number*** (*required*) 

- `width` ***Number*** (*required*) 
