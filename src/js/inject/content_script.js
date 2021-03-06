/*
 * Copyright (c) 2015 SugarCRM Inc.
 */
(function() {

    // attach.js needs this url to get the other files
    var url = chrome.extension.getURL('js/inject/');
    document.documentElement.setAttribute('sdt-path', url);

    // inject attach.js which can access existing JavaScript
    var s = document.createElement('script');
    s.src = chrome.extension.getURL("js/inject/attach.js");
    s.onload = function() {
        this.parentNode.removeChild(this);
    };
    (document.head||document.documentElement).appendChild(s);

    //Handler request from background page
    chrome.runtime.onMessage.addListener(function(message, sender) {

        if (message.clearAllContext) {
            $('.context-overlay').remove();
            return;
        }

        var $comp = $('[data-debug-cid="' + message.cid + '"]');

        if (message.color) {
            $comp.append('<div class="context-overlay"></div>');
            var $overlay = $comp.find('.context-overlay');
            $overlay.css('backgroundColor', message.color);
            $overlay.css('height', $comp.height());
        } else {
            $comp.find('.context-overlay').remove()
        }
    });

})();

