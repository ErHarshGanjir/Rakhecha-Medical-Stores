/* =====================================
   GLOBAL MAINTENANCE CONTROLLER (FIXED)
   ===================================== */

/*
true  = Maintenance ON
false = Website LIVE
*/
var MAINTENANCE_MODE = false;

(function () {
    try {
        var path = window.location.pathname;
        var lowerPath = path.toLowerCase();

        // MAINTENANCE ON → force redirect     /AKfycbyDRpgfFrWror9r1_6cmooMD_UXri4a6nHm6KWlyTTDkVlVuRfvcIFRFg8j912hFJpT-Q.html   and    maintenance.html
        if (MAINTENANCE_MODE === true) {
            if (!lowerPath.endsWith("/maintenance.html")) {
                window.location.replace("/404.html");
            }
        }

        // MAINTENANCE OFF → block maintenance page
        if (MAINTENANCE_MODE === false) {
            if (lowerPath.endsWith("/maintenance.html")) {
                window.location.replace("/");
            }
        }

    } catch (e) {
        // silent fail
    }
})();
