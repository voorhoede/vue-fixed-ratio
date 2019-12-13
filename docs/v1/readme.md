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

### Reserve space

::: demo
<vue-fixed-ratio :width="20" :height="10" :style="{backgroundColor: 'blue'}"></vue-fixed-ratio>
:::

::: demo
<vue-fixed-ratio :width="20" :height="4" :style="{backgroundColor: 'blue'}"></vue-fixed-ratio>
:::

### With image

::: demo

<p>Text above image</p>
<vue-fixed-ratio :width="400" :height="200" :style="{backgroundColor: '#ededed'}">
<img src="https://picsum.photos/4000/2000" :style="{width: '100%'}">
</vue-fixed-ratio>
<p>Text below image</p>
:::

<!-- The API section is auto generated, don't touch please -->

## API

### vue-fixed-ratio 

#### slots 

- `default` 

#### props 

- `height` ***Number*** (*required*) 

- `width` ***Number*** (*required*) 
