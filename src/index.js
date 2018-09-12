/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  var count = 0;
 for (var i = 0; i < preferences.length; i++){
 	if ((i+1) == ( preferences[ preferences[ preferences[i]-1 ]-1])){
 		count++;
 	}
 }
count/=3;
count = Math.floor(count);
    return count;
    
};
