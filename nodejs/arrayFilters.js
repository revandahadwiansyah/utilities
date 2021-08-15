/* array uniques*/
function uniques(arrays){
	return arrays.filter(function(value,index,array) {
		return array.indexOf(value) === index;
    });
}
//simplify ES2015//
const uniques = (arrays) => {
  return arrays.filter((value,index,array) => array.indexOf(value) === index)
}
/* end functions */



/* array filters*/
function filterItems(arrays, search) {
	return arrays.filter(function(index) {
      return index.toLowerCase().indexOf(search.toLowerCase()) !== -1
	});
}
//simplify ES2015//
const filterItems = (arrays, search) => {
  return arrays.filter(index => index.toLowerCase().indexOf(search.toLowerCase()) !== -1)
}
/* end functions */



/* array bigger*/
function filterBigger(arrays, anchors) {
	return arrays.filter(function(index) {
      return index >= anchors;
	});
}
//simplify ES2015//
const filterBigger = (arrays, anchors) => {
  return arrays.filter(index => index >= anchors)
}
/* end functions */


/* array lesser*/
function filterLesser(arrays, anchors) {
	return arrays.filter(function(index) {
      return index < anchors;
	});
}
//simplify ES2015//
const filterLesser = (arrays, anchors) => {
  return arrays.filter(index => index < anchors)
}
/* end functions */