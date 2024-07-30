//TODO: add locales
//file://C:\Y\c\dp\pm\Browsers\web\generation01\g01\js\browserCfg.js 

//#region Config File Definition
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define('browserIntegration', [], factory);
    }
    else {
        if (!window['browserIntegration']) {
            window['browserIntegration'] = {};
        }
        window['browserIntegration'].viewModel = factory();
    }
})(function () {
    function json(path, callback, noCache) {
        var request = new XMLHttpRequest();
        request.addEventListener('load', complete);
        request.addEventListener('error', fail);
        request.open('GET', path);
        request.setRequestHeader('Content-Type', 'application/json');
        if (noCache) {
            request.setRequestHeader("Cache-Control", "no-cache");
        }
        request.send();
        function complete(e) {
            try {
                if (e.loaded) {
                    callback(null, JSON.parse(request.response));
                }
                else {
                    callback("Resource not found: \"" + path + "\"");
                }
            }
            catch (err) {
                callback(err);
            }
        }
        function fail(err) {
            callback(err);
        }
    } //json()
    var Env = /** @class */ (function () {
        function Env() {
        }
        Env.initEnv = function (knownLocales_) {
            this.productBrand = this.getBrand();
            this.browserName = this.getBrowserType();
            this.browserLang = this.getBrowserLanguage(knownLocales_);
            this.browserPrefix = this.browserName ? this.browserName.toUpperCase() + '_' : ''; // i.e. FIREFOX_ | CHROME_
        };
        Env.getBrand = function () {
            var brand = window.location.href.match(/page(dp|hp|de)/i);
            return !!brand ? brand[1] : '';
        };
        Env.getBrowserType = function () {
            var ua = navigator.userAgent.toLowerCase(); // userAgent
            var isIE = ua.indexOf("msie ") !== -1 || ua.indexOf("trident/") > -1;
            var isChrome = ua.indexOf("chrome") !== -1 && typeof window.chrome != "undefined" && typeof window.chrome.runtime != "undefined";
            var isFirefox = ua.indexOf("firefox") !== -1;
            var isEdge = ua.indexOf('edg/') !== -1;
            // NOTE: Chrome-based browsers (like Edge Chromium etc) take preference
            if (isEdge) {
                return 'edge';
            }
            if (isChrome) {
                return 'chrome';
            }
            if (isFirefox) {
                return 'firefox';
            }
            if (isIE) {
                return 'ie';
            }
        }; //getBrowserType()
        Env.getBrowserLanguage = function (knownLocales_) {
            var userLocale = navigator.language || navigator.userLanguage || 'en'; //userLanguage for IE11
            var idx = knownLocales_.available.indexOf(userLocale); // get exact match for pairs like: pt-BR
            if (idx < 0) {
                idx = knownLocales_.available.indexOf(userLocale.split('-')[0]); // try to match es-ES to es
            }
            return idx >= 0 ? knownLocales_.available[idx] : 'en';
        }; //getBrowserLanguage()
        return Env;
    }()); //class Env
    function localization(localesPath_, knownLocales_, done) {
        loadLocales(localesPath_ + "/locale-" + Env.browserLang + ".json");
        function loadLocales(path) {
            json(localesPath_ + "/locale-en.json", function _loadedEng(err, resourceEnglish_) {
                if (err) {
                    done(err);
                    return;
                }
                json(path, function _loadedCurrent(err, resource_) {
                    if (err) {
                        done(err);
                        return;
                    }
                    // Override English strings with a localized version, in case of any missing strings.
                    Object.keys(resource_).forEach(function (key_) {
                        resourceEnglish_[key_] = resource_[key_];
                    });
                    allLoaded(resourceEnglish_);
                }); //json._loadedCurrent
            }); //json._loadedEng
            function allLoaded(locale_) {
                Array.prototype.forEach.call(document.querySelectorAll('[data-translate]'), function (elem_) {
                    elem_.innerHTML = locale_[elem_.dataset['translate'].replace('_BROWSERNAME_', Env.browserPrefix)];
                });
                done();
            } //allLoaded()
        } //loadLocales()
    } //localization()
    function knockoutViewModel(browsersInfo_) {
        var url = '';
        if (!!Env.browserName) {
            var brandes = browsersInfo_[Env.browserName].extensionUrl;
            if (typeof brandes === 'string') {
                /*
                For compatibility with the previous version (to address the browser cache issue):
                "firefox": {
                    "extensionUrl": "extensionUrl": "https://www.crossmatch.com/AltusAddons/g01/current/dppm-3.0.137_on_2018.08.09-r-firefox.xpi"
                }
                */
                url = brandes;
            }
            else {
                /*
                check 'brand' is url with meta or just url (firefox does not need meta data, but chrome does):
                "chrome": {
                    "extensionUrl": { // value is object with brands
                        "dp": {
                            "url": "https://chrome.google.com/webstore/detail/digitalpersona-altus/piimgpjgnagkckjlhjcppbkbjjfjmnbh"
                        },
                        "hp": "https://chrome.google.com/webstore/detail/digitalpersona-altus/piimgpjgnagkckjlhjcppbkbjjfjmnbh"
                    }
                }
                */
                var brand = brandes[Env.productBrand || 'dp'] || brandes['dp'];
                if (typeof brand === 'string') {
                    url = brand; // no meta data just url
                }
                else {
                    url = brand.url; // url from meta data
                }
            }
        }
        return {
            browserName: Env.browserName,
            extensionUrl: url
        };
    } //KnockoutViewModel()
    function showErrorPage(err) {
        var root = document.getElementById('status');
        root.innerHTML = '';
        var r = document.createElement('div');
        r.setAttribute('class', 'error');
        r.appendChild(document.createTextNode('This page is not loaded properly.'));
        r.appendChild(document.createElement('br'));
        if (err) {
            r.appendChild(document.createTextNode(typeof err === 'string' ? err : err instanceof Error ? err.message : JSON.stringify(err)));
        }
        root.appendChild(r);
        document.body.style.display = 'block';
    } //showErrorPage()
    function initConfigure(configPath) {
        if (!configPath) {
            configPath = '../current/config.json';
        }
        json(configPath, function (err, cfgFile_) {
            if (err) {
                showErrorPage(err);
                return;
            }
            //showErrorPage({message: 'test'});
            Env.initEnv(cfgFile_.languages);
            localization('../locales/' + cfgFile_.brand, cfgFile_.languages, function (err) {
                if (err) {
                    showErrorPage(err);
                    return;
                }
                var model = knockoutViewModel(cfgFile_.browsers);
                window.ko.applyBindings(model);
                document.body.style.display = 'block';
            }); //localization() =>
        }, true);
    } //initConfigure()
    return {
        configure: initConfigure
    };
}); //function(factory)
