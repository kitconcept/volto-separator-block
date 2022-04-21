# Volto Separator Block

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-separator-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-separator-block)
[![Build Status](https://github.com/kitconcept/volto-separator-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-separator-block/actions)
[![Build Status](https://github.com/kitconcept/volto-separator-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-separator-block/actions)
[![Build Status](https://github.com/kitconcept/volto-separator-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-separator-block/actions)

![kitconcept GmbH](https://github.com/kitconcept/volto-blocks/raw/master/kitconcept.png)

The Volto Separator Block allows editors to add a visual separator between blocks to a Volto page.

## Screenshot

![Separator-Block](https://github.com/kitconcept/volto-separator-block/raw/master/screenshot.png)

## Screencast

![Separator-Block](https://github.com/kitconcept/volto-separator-block/raw/master/screencast.gif)

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-separator-block
cd my-volto-project
```

Add `@kitconcept/volto-separator-block`to your package.json:

```
"addons": [
    "@kitconcept/volto-separator-block"
],

"dependencies": {
    "@kitconcept/volto-separator-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login, create a new page. The separator block will show up in the Volto blocks chooser.

# Credits

<img alt="Forschungszentrum Jülich" src="https://github.com/kitconcept/volto-blocks/raw/master/fz-juelich.svg" width="200px" />

The development of this plugin has been kindly sponsored by [Forschungszentrum Jülich](https://fz-juelich.de).

# License

The project is licensed under the MIT license.
