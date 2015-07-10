/*
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
 * Copyright 2014-2015 Alexander Madyankin <alexander@madyankin.name>, Roman Shamin <al4emist.artway@gmail.com>, Sergei Vasilev <sergen-vas@yandex.ru>
 */

(function(document){
  "use strict";

  function renderData() {
    var SVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://'+
'www.w3.org/1999/xlink" style="display: none"><symbol id="ico'+
'n-c-20x20" viewBox="0 0 20 20"><circle fill="#F26722" cx="10'+
'" cy="10" r="10"></circle></symbol><symbol id="icon-c-50x33"'+
' viewBox="0 0 100 66"><path fill="#999" d="M81.8 65.9l-60.6.'+
'1v-.1c-.3.1-.8.1-1.5.1-5.3 0-9.9-1.8-13.9-5.4C2 57 0 52.6 0 '+
'47.3c0-3.3.9-6.4 2.6-9.2 1.7-2.8 4.1-5.1 7-6.7-.3-1.4-.5-2.8'+
'-.5-4.1 0-5.3 2-9.7 5.9-13.3 3.9-3.6 8.5-5.4 13.8-5.4 4.9 0 '+
'9.2 1.5 12.9 4.7 2-4.1 5-7.3 9-9.7C54.7 1.2 59 0 63.6 0c6.5 '+
'0 12.2 2.2 17.1 6.7S88 16.6 88 23c0 2.2-.4 4.5-1.1 6.8 3.9 1'+
'.3 7 3.5 9.5 6.7s3.7 6.8 3.7 10.8c0 5-1.8 9.3-5.3 12.8-3.6 3'+
'.5-7.9 5.5-13 5.8z"></path></symbol><symbol id="icon-h-50x50'+
'" viewBox="0 0 100 100"><path fill="#B9529F" d="M100 28.5c0 '+
'3.2-.7 6.9-2.2 11.2-.8 2.6-2.6 6.3-5.3 11-9.6 16.8-23.8 33.2'+
'-42.6 49.3C31.2 83.8 17 67.4 7.5 50.7 4.8 46 3 42.3 2.1 39.7'+
'.7 35.7 0 31.9 0 28.5c0-7.9 2.6-14.6 7.8-20.2S19.3 0 26.6 0c'+
'4.8 0 9.3 1.3 13.5 3.9s7.4 6.2 9.8 10.8c2.4-4.6 5.7-8.2 9.9-'+
'10.8C64 1.3 68.5 0 73.4 0 80.7 0 87 2.8 92.2 8.3c5.2 5.6 7.8'+
' 12.3 7.8 20.2z"></path></symbol><symbol id="icon-pin20" vie'+
'wBox="0 0 525.153 525.153"><path d="M262.576 0C160.96 0 78.8'+
'16 82.164 78.816 183.76c0 137.874 183.76 341.393 183.76 341.'+
'393s183.76-203.518 183.76-341.393C446.337 82.164 364.194 0 2'+
'62.577 0zm0 249.404c-36.257 0-65.644-29.387-65.644-65.644 0-'+
'36.17 29.387-65.644 65.644-65.644s65.644 29.474 65.644 65.64'+
'4c0 36.28-29.386 65.644-65.644 65.644z"></path></symbol><sym'+
'bol id="icon-stars55" viewBox="0 0 525.153 525.153"><path d='+
'"M262.576 414.028l162.272 97.963-43.062-184.59 143.367-124.2'+
'-188.77-15.994-73.807-174.044-73.806 174.044L0 203.2l143.367'+
' 124.2-43.062 184.59 162.27-97.962z"></path></symbol><symbol'+
' id="icon-tbilisi" viewBox="0 0 93.08 93.08"><path d="M91.40'+
'5 67.947h-5.86L67.37 18.557 46.54 48.684 24.274 18.916l-16.7'+
'4 49.03h-5.86L0 74.523h22.242l8.73-24.036 15.83 21.14.096.13'+
'3.097-.134 15.112-21.14 8.73 24.036H93.08"></path></symbol><'+
'/svg>';
    var STYLE = '<style>@-webkit-keyframes spin { 100% { -webkit-transform: r'+
'otate(360deg); transform: rotate(360deg); } } @keyframes spi'+
'n { 100% { -webkit-transform: rotate(360deg); transform: rot'+
'ate(360deg); } } .icon { position: relative; display: inline'+
'-block; width: 25px; height: 25px; overflow: hidden; } .icon'+
'__cnt { width: 100%; height: 100%; background: inherit; fill'+
': currentColor; transform: translateX(0); /* Crisp fix for n'+
'on-retina */ -ms-transform: translate(.5px,-.3px); /* Crisp '+
'fix for IE */ } .icon__spinner { position: absolute; top: 0;'+
' left: 0; width: 100%; height: 100%; } </style>';

    document.querySelector("head").insertAdjacentHTML("afterbegin", STYLE);
    document.querySelector("body").insertAdjacentHTML("afterbegin", SVG);
  };

  function mods(mod) {
    var mods = mod.split(',');
    var result = "";

    for (var i = 0; i < mods.length; i++) {
      result += " icon--"+ mods[i];
    };
    
    return result;
  };

  function icon(name, options) {
    var options = options || {};
    var mod    = options.mod ? mods(options.mod) : "";
    var klass   = "icon icon--"+ name +" "+ mod +" "+ (options['class'] || "");


    var icon =  "<svg class='icon__cnt'>"+
                  "<use xlink:href='#icon-"+ name +"' />"+
                "</svg>";

    var html =  "<div class='" + klass + "'>"+
                  wrapSpinner(icon, klass) +
                "</div>";

    return html;
  };

  function wrapSpinner(html, klass) {
    if (klass.indexOf("spinner") > -1) {
      return "<div class='icon__spinner'>"+ html +"</div>";
    } else {
      return html;
    };
  };

  function renderIcons() {
    var render = true;
    var icons = document.querySelectorAll("[data-icon]");

    for (var i = 0; i < icons.length; i++) {
      var currentIcon = icons[i];
      var name        = currentIcon.getAttribute("data-icon");
      var options = {
        'class':  currentIcon.className,
        mod:   currentIcon.getAttribute("data-mod")
      };

      currentIcon.insertAdjacentHTML("beforebegin", icon(name, options));
      currentIcon.parentNode.removeChild(currentIcon);
    };
  };

  function ready() {
    renderData();
    renderIcons();
  };

  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", ready, false);
  };

})(window.document);
