/* =====================================
   GLOBAL MAINTENANCE CONTROLLER (FIXED)
   ===================================== */

/*
true  = Maintenance ON
false = Website LIVE
*/

var MAINTENANCE_MODE = true;

(function () {
    try {
        var path = window.location.pathname;
        var lowerPath = path.toLowerCase();

        // Detect base path (repo-safe)
        var basePath = path.split("/").slice(0, -1).join("/") || "/";

        // MAINTENANCE ON → force redirect
        if (MAINTENANCE_MODE === true) {
            if (!lowerPath.endsWith("/maintenance.html")) {
                window.location.replace(basePath + "https://rakhechamedical.in/maintenance.html");
            }
        }

        // MAINTENANCE OFF → block maintenance page
        if (MAINTENANCE_MODE === false) {
            if (lowerPath.endsWith("/maintenance.html")) {
                window.location.replace(basePath + "https://rakhechamedical.in/");
            }
        }

    } catch (e) {
        // silent fail (intentional)
    }
})();
