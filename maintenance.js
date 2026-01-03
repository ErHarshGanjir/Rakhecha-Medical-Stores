/* ==============================
   GLOBAL MAINTENANCE CONTROLLER
   ============================== */

/*
true  = Maintenance ON (site locked)
false = Website LIVE
*/

var MAINTENANCE_MODE = false;  // true = ON | false = OFF

(function () {
    try {
        if (MAINTENANCE_MODE === true) {
            var path = window.location.pathname.toLowerCase();

            // allow maintenance page itself
            if (!path.endsWith("/maintenance.html")) {
                window.location.replace("/maintenance.html");
            }
        }
    } catch (e) {
        // silent fail (looks more real)
    }
})();
