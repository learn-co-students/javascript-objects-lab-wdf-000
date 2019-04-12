
var recipes = {};

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes[ingredient] = amount;
  return recipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes[ingredient] = amount;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  delete recipes[ingredient];
  return recipes;
}


function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject.key;
  return newObject;
}
