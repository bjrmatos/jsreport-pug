# jsreport-jade

[![Build Status](https://travis-ci.org/bjrmatos/jsreport-jade.png?branch=master)](https://travis-ci.org/bjrmatos/jsreport-jade)

**Use [jade](http://jade-lang.com) templating engine in [jsreport](https://github.com/jsreport/jsreport) and [jsreport-core](https://github.com/jsreport/jsreport-core)**

```bash
npm install jsreport-jade
```

You can access the input data through jade locals and you can find helpers on `templateHelpers`
```html
doctype html
html(lang="en")
  head
  body
    p Hello from helper: #{templateHelpers.hello()}
    p Hello from input data: #{hello}
```

**See the [playground example](https://playground.jsreport.net/studio/workspace/Vy9Y0fHz-/3)**