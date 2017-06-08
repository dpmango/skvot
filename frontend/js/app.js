'use strict';

import './../static/libs/mediaCheck.js'
import './../static/libs/jquery.magnific-popup.js'

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

import {productPreview} from './modules/productPreview'
import {product} from './modules/product'
import svg4everybody from 'svg4everybody/dist/svg4everybody.legacy.js'

import { page } from './config'

$(document).ready(function() {

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
  if(page === 'catalog') {
    rangeSlider.init();
    views.init();
    reset();
  }

  asideSection.init();
  checkbox.init();
  color.init();
  svg4everybody();

  productPreview.init();
  product.init();
});