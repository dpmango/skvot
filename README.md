# Skvot project
Project based on idea of components.

### Technologies and methodologies
| Name | Link |
| ------ | ------ |
| BEM | https://jquery.com/ |
| Gulp | https://isotope.metafizzy.co/ |
| Webpack | https://github.com/sparkbox/mediaCheck |
| Svg Store (sprites) | https://www.npmjs.com/package/gulp-svgstore |
| Babel (ES6) | https://babeljs.io/ |

### Plugins
Plug-ins used in the project.

| Plugin | Link |
| ------ | ------ |
| jQuery | https://jquery.com/ |
| Isotope | https://isotope.metafizzy.co/ |
| MediaCheck | https://github.com/sparkbox/mediaCheck |
| svg4everybody | https://github.com/jonathantneal/svg4everybody |
| magnificPopup | http://dimsemenov.com/plugins/magnific-popup/ |
| noUISlider | https://refreshless.com/nouislider/ |
| AnimeJS | http://animejs.com/ |
| Lodash | https://lodash.com/ |

### Preprocessors

| Preprocessor | Link |
| ------ | ------ |
| SASS (scss) | http://sass-lang.com/ |
| Pug (Jade) | https://pugjs.org/api/getting-started.html |

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd Skvot
$ npm install -d
$ npm run dev
```

For production environments...

```sh
$ npm run production
```

## Layout documentation

### Change auth (login / not login)
```
project
|__frontend
|    |__components
|        |__auth
|            |__auth.pug
```
See comments `Loggined / Not Loggined`, uncomment one of it.

### Cards modifiers

```
project
|__frontend
|    |__components
|        |__topItem
|            |__topItemCategory.pug
|            |__topItem.pug
|            |__topItemBig.pug
```
`.top-item--category` - view items in categories pages
`.top-item--big` - biggest card size

### Page head (where breadcrumbs)

```
Project
|__frontend
|    |__containers
|        |__pageHead
|            |__pageHeadCatalog.pug
```
`.page-head--darken` - set overlay, and ready to take style bg image (style="img/test.jpg")
