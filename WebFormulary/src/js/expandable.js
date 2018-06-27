
window.generateDicExpandable = function generateDicExpandable(values) {
    if (values.isExpandable == false) {
    	return null;
    }

    var itemsExpandable = {}
    itemsExpandable["description"] = values.description
    itemsExpandable["textButtonReadMore"] = values.textbuttonReadMore
    itemsExpandable["textButtonReadLess"] = values.textbuttonReadLess
    return itemsExpandable;
}