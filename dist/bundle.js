/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/app.css?");

/***/ }),

/***/ "./src/css/paola.css":
/*!***************************!*\
  !*** ./src/css/paola.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/paola.css?");

/***/ }),

/***/ "./src/css/universo.css":
/*!******************************!*\
  !*** ./src/css/universo.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/universo.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/app.css */ \"./src/css/app.css\");\n/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_universo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/universo.css */ \"./src/css/universo.css\");\n/* harmony import */ var _css_universo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_universo_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_paola_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/paola.css */ \"./src/css/paola.css\");\n/* harmony import */ var _css_paola_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_paola_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jquery_datetimepicker_build_jquery_datetimepicker_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-datetimepicker/build/jquery.datetimepicker.min.css */ \"./node_modules/jquery-datetimepicker/build/jquery.datetimepicker.min.css\");\n/* harmony import */ var jquery_datetimepicker_build_jquery_datetimepicker_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_datetimepicker_build_jquery_datetimepicker_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lazyload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazyload */ \"./node_modules/lazyload/lazyload.js\");\n/* harmony import */ var lazyload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazyload__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.min.js */ \"./node_modules/slick-carousel/slick/slick.min.js\");\n/* harmony import */ var slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_app_js__WEBPACK_IMPORTED_MODULE_7__);\n/*JQUERY */\n\n\n\n\n\n\n\nwindow.Popper = __webpack_require__(/*! popper.js */ \"./node_modules/popper.js/dist/esm/popper.js\").default;\n\n/*JQUERY UI INTEGRACION*/\n__webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n\n/*JAVASCRIPT*/\n__webpack_require__(/*! webpack-jquery-ui/autocomplete */ \"./node_modules/webpack-jquery-ui/autocomplete.js\");\n\n\n\n   $('.slick_all_carrousel img').each(function() {\n\n   \t  $(this).addClass('lazy-load').attr('data-src',$(this).attr('src'));\n\n   });\n\n$(document).ready(function() {\n\n/*TODAS LAS IMAGENES CON CLASE lazy-load se cargan hasta querySelectorAll el usuario las visualiza*/\n   new lazyload__WEBPACK_IMPORTED_MODULE_5___default.a(document.querySelectorAll('.lazy-load'));\n\n});\n\n\n\n\n\n\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/src/jquery.js\")))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function($) {\n\n$(document).ready(function() {\n\n      if ( $(\"#buscar\").length ) {\n    $(\"#buscar\").autocomplete({\n      minLength: 3,\n      source : \"/search/ajax_suggest.php\",\n    }).data(\"uiAutocomplete\")._renderItem = function(ul, item) {\n      return $(\"<li />\")\n      .data(\"item.autocomplete\", item)\n      .append(\"<a href='\"+item.uri+\"'><img class='autocomplete_image' src='\"+item.icon+\"' /><p class='title_autocomplete'>\"+item.label+\"<p></a>\")\n      .appendTo(ul);\n    };\n  }\n\n   // MENU RESPONSIVE\n    var accion =\"dentro\";\n    $(\".hamburguer-icon-um\").click(function(){\n       if (accion == \"dentro\"){\n        $(\".nav-container\").addClass('active');\n        accion = \"fuera\";\n       }\n       else{\n        $(\".nav-container\").removeClass('active');\n        accion = \"dentro\";\n       }\n    });\n\n $('.slide-product-full div').removeClass('container_div');\n\n    // carousel topbar\n        $('.slide-product-full > div').slick({\n          infinite: true,\n          arrows: false,\n          slidesToShow:1,\n          slidesToScroll: 1,\n          autoplay: true,\n          lazyLoad: 'ondemand',\n          dots: false,\n          speed: 5000,\n          slidesToShow: 1,\n          swipeToSlide:true,\n          focusOnSelect: true\n        });\n\n        setTimeout(function() {\n\n     $('.product-carousel').slick('unslick');\n     $(\".product-carousel\").slick({\n              infinite: true,\n                            slidesToShow: 4,\n                            slidesToScroll: 4,\n              arrows: true,\n                        nextArrow: '<i class=\"fa fa-chevron-right text-white slick-next\"></i>',\n                        prevArrow: '<i class=\"fa fa-chevron-left text-white slick-prev\"></i>',\n              dots: false,\n              responsive: [\n      {\n      breakpoint: 480,\n      settings: {\n        arrows: false,\n        centerMode: true,\n        slidesToShow: 1\n      }\n    }\n  ]\n            \n            });\n\n   \n\n  },1000);\n\n\n\n\t$('#carrousel_3').slick({\n      infinite: true,\n      arrows: true,\n      nextArrow: '<i class=\"fas fa-chevron-right slick-next\"></i>',\n      prevArrow: '<i class=\"fas fa-chevron-left slick-prev\"></i>',\n      slidesToShow:8,\n      slidesToScroll: 1,\n      autoplay: true,\n      autoplaySpeed: 7000,\n      lazyLoad: 'ondemand',\n      dots: false,\n      responsive: [\n          {\n            breakpoint: 768,\n            settings: {\n              arrows: false,\n              centerMode: true,\n              centerPadding: '40px',\n              slidesToShow: 6 \n            }\n          },\n          {\n            breakpoint: 480,\n            settings: {\n              arrows: false,\n              centerMode: true,\n              centerPadding: '40px',\n              slidesToShow: 3\n            }\n          }\n        ]\n  });\n\n\tconsole.log(\"imprimiendo\");\n\n\t// Ocultar por defecto resumen de carrito\n\t\t$('.car-view-um').css(\"display\", \"none\");\n\t\t$(\"#canasta_compras\").hover(function(){\n\t\t    $(\".car-view-um\").fadeIn(400);\n\t\t});\n\n\t\t$(\"#canasta_compras\").mouseleave(function(){\n\t\t    $(\".car-view-um\").fadeOut(400);\n\t\t});\n\n\n\t//Indicador de ciudades popup funcionts\n\n\t$location = $('#ciudades_ip :selected').text();\n\n    $('#location').text($location);\n\n\n      $('#location').on('click',function(){\n\n      \t $('#container-popup').fadeToggle().css('display','flex');\n\n      });\n\n      $('.container-popup').on('click',function() {\n\n      \t  $(this).fadeOut();\n\n      });\n\n    var img = $('<img width=\"100\">'); //Equivalent: $(document.createElement('img'))\n    img.attr('src', 'https://cdn.totalcode.com.co/universomascotas/web_content/assets/Promociones-universomascotas.webp');\n\t$('.indicador_ciudad').prepend(img);\n\n    $('.indicador_ciudad').wrap(\"<div class='container-popup'></div>\").fadeIn(500);\n\n    // hide #back-top first\n\t$(\"#back-top\").hide();\n\t\n\t// fade in #back-top\n\t$(function () {\n\t\t$(window).scroll(function () {\n\t\t\tif ($(this).scrollTop() > 100) {\n\t\t\t\t$('#back-top').fadeIn();\n\t\t\t\t$('.scroll-navigation').addClass('fixed-top-nav').fadeIn();\n\t\t\t} else {\t\n\t\t\t\t$('#back-top').fadeOut();\n\t\t\t\t$('.scroll-navigation').removeClass('fixed-top-nav');\n\t\t\t}\n\t\t});\n\t\t// scroll body to 0px on click\n\t\t$('#back-top').click(function () {\n\t\t\t$('body,html').animate({\n\t\t\t\tscrollTop: 0\n\t\t\t}, 800);\n\t\t\treturn false;\n\t\t});\n\t});\n\n\n\t//Categorias interaccion\n \n        $('.dropdown').hover(function() {\n\n        \t$(this).find('.mega-menu').fadeIn('fast');\n        },function() {\n        \t$(this).find('.mega-menu').fadeOut('fast');\n        });\n\n        const mq = window.matchMedia( \"(min-width: 1000px)\" );\n        const mv = window.matchMedia( \"(max-width: 600px)\" );\n\n         \n\n        $('.content_cat_main .has-children > a').click(function(event){\n\n            event.preventDefault();\n\n            var target = $(this).parent();\n\n            target.toggleClass('active');\n            \n            target.children('ul').slideToggle();\n        });\n\n        if(mv.matches){\n\n        $('.vertical-menu-um .has-children > a').click(function(event) {\n             event.preventDefault();\n            var target = $(this).parent();\n            target.toggleClass('active');\n            target.children('ul').slideToggle();\n        });\n    }\n\n\n\n\t$(window).on(\"load\",function(e){\n\t$('.formsearchcontainer .searchformum .input_buscar').focus();\n});\n$(window).on(\"load resize\",function(e){\n  if ($(window).width() <= 640){\n\n         // MENU RESPONSIVE\n        var accion =\"dentro\";\n        $(\".filter-mobile-categories\").click(function(){\n           if (accion == \"dentro\"){\n            $(\".filter-mobile-subcategories\").css(\"display\",\"block\");\n            accion = \"fuera\";\n           }else{\n            $(\".filter-mobile-subcategories\").css(\"display\",\"none\");\n            accion = \"dentro\";\n           }\n        })\n   \n    // MENU RESPONSIVE FIN\n    //CAR MOBILE\n    $(\".um-car-icon\").appendTo( \"#car-info-mobile-um\" );\n    $(\".um-car-icon\").on('click', function(){\n         window.location = \"https://www.universomascotas.co/checkout/viewcart.phtml\";    \n    });\n    //CAR MOBILE FIN\n  }\n});\n\n\n\t\n\n\n\t// carousel topbar\n\t$('.topbarslide').slick({\n\t\tinfinite: true,\n\t\tarrows: true,\n\t\tnextArrow: '<i class=\"fas fa-chevron-right text-white slick-next\"></i>',\n\t\tprevArrow: '<i class=\"fas fa-chevron-left text-white slick-prev\"></i>',\n\t\tslidesToShow:8,\n\t\tslidesToScroll: 1,\n\t\tautoplay: true,\n\t\tlazyLoad: 'ondemand',\n\t\tdots: false,\n\t\tspeed: 5000,\n\t\tslidesToShow: 1,\n\t\tswipeToSlide:true,\n\t\tfocusOnSelect: true,\n\t\tresponsive: [\n\t\t    {\n\t\t      breakpoint: 768,\n\t\t      settings: {\n\t\t        arrows: false,\n\t\t        centerMode: true,\n\t\t        centerPadding: '40px',\n\t\t        slidesToShow: 1 \n\t\t      }\n\t\t    },\n\t\t    {\n\t\t      breakpoint: 480,\n\t\t      settings: {\n\t\t        arrows: false,\n\t\t        centerMode: true,\n\t\t        centerPadding: '40px',\n\t\t        slidesToShow:1\n\t\t      }\n\t\t    }\n\t\t  ]\n\t});\n\n \n\n\n\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ \"./node_modules/jquery/src/jquery.js\")))\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });