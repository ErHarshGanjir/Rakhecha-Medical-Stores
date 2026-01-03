/* ==============================
   GLOBAL MAINTENANCE CONTROLLER
   ============================== */

/*
true  = Maintenance ON
false = Website LIVE
*/

var MAINTENANCE_MODE = false;

(function () {
    try {
        var path = window.location.pathname.toLowerCase();

        // CASE 1: Maintenance ON → force everyone to maintenance page
        if (MAINTENANCE_MODE === true) {
            if (!path.endsWith("/maintenance.html")) {
                window.location.replace("/maintenance.html");
            }
        }

        // CASE 2: Maintenance OFF → block maintenance page access
        if (MAINTENANCE_MODE === false) {
            if (path.endsWith("/maintenance.html")) {
                window.location.replace("/");
            }
        }

    } catch (e) {
        // silent fail (no console noise)
    }
})();
