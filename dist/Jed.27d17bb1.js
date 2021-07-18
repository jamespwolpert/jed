// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Focm":[function(require,module,exports) {
var contact = document.querySelector('.contact');
var track = document.querySelector('.track');
var exclaims = document.querySelectorAll('.exclaim');

function skew(e) {
  if (!track.classList.contains('skewed')) {
    track.classList.add('skewed'); // exclaims.forEach((i)=> {
    //     i.style.display = 'block';
    // });
  } else {
    track.classList.remove('skewed'); // exclaims.forEach((i)=> {
    //     i.style.display = 'none';
    // });
  }
}

contact.addEventListener('mouseenter', skew);
contact.addEventListener('mouseleave', skew); // Load random cat images. heh.

var catHouse = document.querySelector('.quotes');
var cats = ['a.png', 'b.png', 'c.png', 'd.png', 'e.png'];

function showCat(targetCat, catPosX, catPosY) {
  var img = document.createElement('img');
  img.className = 'cat';
  img.src = "/bitmap/".concat(cats[targetCat]);
  img.style.left = "".concat(catPosX, "px");
  img.style.top = "".concat(catPosY, "px");
  catHouse.appendChild(img);
  setTimeout(function () {
    catHouse.removeChild(img);
  }, 6600);
}

function selectCat() {
  var targetCat = Math.floor(Math.random() * cats.length);
  var catPosX = Math.floor(Math.random() * window.innerWidth);
  var catPosY = Math.floor(Math.random() * window.innerHeight);
  showCat(targetCat, catPosX, catPosY);
}

setInterval(function () {
  selectCat();
}, 1000); // const quotes = [
//     "I can't be <span class='expletive'>fucked</span> with it, honestly",
//     "Your old sound was quite <span class='expletive'>shite</span>, mate.",
//     "Stop reachin' over the bar ya <span class='expletive'>cunt</span>",
//     "<span class='expletive'>Must</span> you play guitar while I'm micing the kit?", 
//     "Eh, the room's fine -- grow some <span class='expletive'>ears<span>, man",
//     "Yeah, this band is pretty <span class='expletive'>rockin!</span>"
// ];
// function showQuote(targetQuote, quotePosX, quotePosY) {
//     let div = document.createElement('div');
//     div.className = 'quote';
//     div.innerHTML = quotes[targetQuote];
//     div.style.left = `${quotePosX}px`;
//     div.style.top = `${quotePosY}px`;
//     catHouse.appendChild(div);
//     setTimeout(()=> { catHouse.removeChild(div)}, 6600);
// }
// function selectQuote() {
//     let targetQuote = Math.floor(Math.random() * quotes.length);
//     let quotePosX = Math.floor(Math.random() * window.innerWidth); 
//     let quotePosY = Math.floor(Math.random() * window.innerHeight);  
//     showQuote(targetQuote, quotePosX, quotePosY);
// }
// setInterval(()=> {
//     selectQuote();
// }, 3000)

var delta = 0;
var reverse = false;
var fps = 1000 / 60;
var then;
var now;
var elapsed;
var waves = document.querySelector('#waves');

function initWave(fps) {
  then = Date.now();
  wave();
}

function wave() {
  window.requestAnimationFrame(wave);
  now = Date.now();
  elapsed = now - then;

  if (elapsed > fps) {
    if (!reverse) {
      delta += 2;
    } else {
      delta -= 2;
    }

    waves.setAttribute('values', "".concat(delta));
  }
}

initWave();
setInterval(function () {
  reverse = !reverse;
}, 12000);
},{}]},{},["Focm"], null)
//# sourceMappingURL=/Jed.27d17bb1.js.map