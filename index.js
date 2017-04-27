var recipes = new Object();

function updateObjectWithKeyAndValue(obj, key, value){
  var newArray = Object.assign(obj, {[key]: value});
  return newArray;
};

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  var obj = Object.assign(obj, {[key]: value});
  return obj;

};

function deleteFromObjectByKey(obj, key){
var newObject = Object.assign(obj, {})
delete newObject.key
  return newObject
};

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj.key;
  return obj
}
