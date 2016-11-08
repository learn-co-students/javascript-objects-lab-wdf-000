var recipes = {};


function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key){
  var object_clone = Object.assign({}, object)
  delete object_clone[key];
  return object_clone

}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
