/* ==========================
   GLOBAL MAINTENANCE CONTROL
   ========================== */

const MAINTENANCE_MODE = true; 
// true  = maintenance ON
// false = website live

(function () {
    if (MAINTENANCE_MODE) {
        const current = window.location.pathname;
        if (!current.endsWith("maintenance.html")) {
            window.location.replace("/maintenance.html");
        }
    }
})();
