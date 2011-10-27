(function () {
    'use strict';

    // Custom event raised after the fragment is appended to the DOM.
    WinJS.Application.addEventListener('fragmentappended', function handler(e) {
        if (e.location === '/html/homePage.html') { fragmentLoad(e.fragment, e.state); }
    });

    function fragmentLoad(elements, options) {
        WinJS.UI.processAll(elements)
            .then(function () {
                // TODO: Initialize the fragment here.
            });
    }

    WinJS.Namespace.define('homePage', {
        fragmentLoad: fragmentLoad,
    });
})();
