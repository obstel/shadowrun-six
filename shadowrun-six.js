import SR6_ItemSheet from "./modules/sheets/SR6_ItemSheet.js";

Hooks.once("init", function () {
    console.log("SR6 | Initialising Shadowrun 6th System");

    Items.unregister("core", ItemSheet);
    Items.registerSheet("shadowrun-six", SR6_ItemSheet, { makeDefault: true });
});