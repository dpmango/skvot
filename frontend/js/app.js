'use strict';

import './../static/libs/mediaCheck.js'
import './../static/libs/jquery.magnific-popup.js'

import {header} from './modules/header'

import {catalog} from './modules/catalog'
import {sliders} from './modules/sliders'
import {lkPopup} from './modules/lkPopup'
import {cartPopup} from './modules/cartPopup'
import {tabs} from './modules/tabs'
import {up} from './modules/up'
import {review} from './modules/reviews'
import {modal} from './modules/modal'
import {textCollapse} from './modules/textCollapse'
import {item} from './modules/item'

import {rangeSlider} from './modules/filter/rangeSlider'
import {asideSection} from './modules/filter/asideSection'
import {checkbox} from './modules/filter/checkbox'
import {color} from './modules/filter/color'
import {views} from './modules/filter/views'
import {reset} from './modules/filter/reset'
import {select} from './modules/customSelect'
import {letterNav} from './modules/letterNavigation'
import {brand} from './modules/brand'

import {productPreview} from './modules/productPreview'
import {product} from './modules/product'

import {count} from './modules/count'

import {cart} from './modules/cart'
import {store} from './modules/store'

import {team} from './modules/team'
import {sgmap} from './modules/gmap.simple.js'
import {dgmap} from './modules/gmap.delivery.js'
import svg4everybody from 'svg4everybody/dist/svg4everybody.legacy.js'
import {tooltipp} from './modules/tooltip'

import { page } from './config'

$(document).ready(function() {
  svg4everybody();

  if(page === 'catalog') {
    rangeSlider.init();
    views.init();
    reset();
  }
  if(page === 'brands' || page === 'delivery') {
    letterNav.init();
  }
  if(page === 'brand') {
    brand.init();
  }
  if(page === 'team') {
    team.init();
  }
  $(window).load(function() {
    header.init();
  });
  catalog.init();
  sliders.init();
  lkPopup.init();
  cartPopup.init();
  up.init();
  tabs.init();
  review.init();
  modal.init();
  textCollapse.init();
  item.init();
  select.init();
  asideSection.init();
  checkbox.init();
  color.init();
  count.init();
  cart.init();
  productPreview.init();
  product.init();
  tooltipp.init();
  store.init();
  dgmap.init();
  if(page === 'address' || page === 'store') {
    sgmap.init();
  }
});