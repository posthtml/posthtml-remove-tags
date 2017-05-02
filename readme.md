# posthtml-remove-tags

> A [posthtml](https://github.com/posthtml) A posthtml plugin for removing tags

[![Travis Build Status](https://img.shields.io/travis/GitScrum/posthtml-remove-tags.svg?style=flat-square&label=unix)](https://travis-ci.org/GitScrum/posthtml-remove-tags)[![AppVeyor Build Status](https://img.shields.io/appveyor/ci/GitScrum/posthtml-remove-tags.svg?style=flat-square&label=windows)](https://ci.appveyor.com/project/GitScrum/posthtml-remove-tags)[![node](https://img.shields.io/node/v/post-sequence.svg?maxAge=2592000&style=flat-square)]()[![npm version](https://img.shields.io/npm/v/posthtml-remove-tags.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-remove-tags)[![Dependency Status](https://david-dm.org/gitscrum/posthtml-remove-tags.svg?style=flat-square)](https://david-dm.org/gitscrum/posthtml-remove-tags)[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)[![Coveralls status](https://img.shields.io/coveralls/GitScrum/posthtml-remove-tags.svg?style=flat-square)](https://coveralls.io/r/GitScrum/posthtml-remove-tags)

[![npm downloads](https://img.shields.io/npm/dm/posthtml-remove-tags.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-remove-tags)[![npm](https://img.shields.io/npm/dt/posthtml-remove-tags.svg?style=flat-square)](https://www.npmjs.com/package/posthtml-remove-tags)[![Package Quality](http://npm.packagequality.com/shield/posthtml-remove-tags.svg?style=flat-square)](http://packagequality.com/#?package=posthtml-remove-tags)

## Why?
Essential for removing unwanted or tags do not pass validation

## Install

```bash
npm i -S posthtml posthtml-remove-tags
```

> **Note:** This project is compatible with node v4+

## Usage

```js
import {readFileSync, writeFileSync} from 'fs';
import posthtml from 'posthtml';
import removeTags from 'posthtml-remove-tags';

const html = readFileSync('input.html', 'utf8');

posthtml()
    .use(removeTags({tags: ['style', 'script']}))
    .process(html)
    .then(result => {
        writeFileSync('output.html', result.html);
    });

```
Returns the html without the tags listed in option

## Example

#### input.html
```html
<!DOCTYPE html>
<head><style></style></head>
```

#### output.html
```html
<!DOCTYPE html>
<head></head>
```

## Options

#### `tags`
Type: `Array`  
Default: `[]`  
Description: *The list of tags to be deleted*  

## LICENSE

[MIT](license)
