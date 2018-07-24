# @xtrctio/eslint-config

ESLint rules for xtrct.io

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i -D eslint
```

Next, install `@xtrctio/eslint-config`:

```
$ npm i -D @xtrctio/eslint-config
```

### Peer Dependencies
You'll also need to install the following peer dependencies:
```
$ npm i -D eslint-config-airbnb-base eslint-plugin-import eslint-plugin-mocha
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `@xtrctio/eslint-config` globally, as well as it's peer dependencies.

## Usage

Add `@xtrctio/eslint-config` to the extends section of your `.eslintrc` configuration file. 

```json
{
    "extends": [
        "@xtrctio/eslint-config"
    ]
}
```





