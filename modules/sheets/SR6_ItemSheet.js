export default class SR6_ItemSheet extends Itemsheet {
    get template() {
        return 'systems/shadowrun-six/templates/sheets/${this.item.data.type}-sheet.html';
    }
}