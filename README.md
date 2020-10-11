# mathjax-aria-label

MathJax TeX extension for providing an accessible name.

## MathJax Extension: `aria-label`

This extension implements a TeX macro `\arialabel{accessible name}{ math content}`. It enables authors to provide a textual description that provides the accessible name for the math content; in particular, it allows authors to override the heuristics in MathJax's [accessibility extension](http://docs.mathjax.org/en/latest/basic/a11y-extensions.html) or in other words the heuristics in [speech-rule-engine](https://github.com/zorkow/speech-rule-engine/).

## Usage

* NodeJs: Just require this module
* Client-side: see [the example](https://krautzource.github.io/mathjax-aria-label/) in the [docs](./tree/master/docs).
