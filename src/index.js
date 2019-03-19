/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

	for (let i = 0; i < preferences.length; i++) {
		var k = preferences[i];
		var n = i+1;
		var m = preferences[k-1];
		if (preferences[m-1]==n && m!=n) {count+=1;}
	}
	count/=3;
	return count;
};
