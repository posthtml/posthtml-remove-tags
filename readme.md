# <a href="https://github.com/posthtml/posthtml"><img valign="text-bottom" height="49" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg"></a> remove tags

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
    .use(removeTags({tags: '<style></style>'}))
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
Type: `String`  
Default: ` `  
Description: *The list of tags to be deleted*  
*:warning: currently works only with `string`, `array` is planed*

## LICENSE

> MIT License (MIT)

> Copyright (c) Ivan Demidov <scrum@list.ru>

> Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
