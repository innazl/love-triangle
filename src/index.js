/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  let length = preferences.length;
  for (let i = 0; i < length; i++) {
    let love1 = preferences[i];
    let index_love1 = i + 1;
    let index_love2 = love1 - 1;
    if (index_love2 < length && index_love2 == love1 - 1) {
      let love2 = preferences[index_love2];
      let index_love3 = love2 - 1;
      if (index_love3 < length && index_love3 == love2 - 1) {
        let love3 = preferences[index_love3];
        if (love3 == index_love1) {
          count++;
        }
      }
    }
  }
  return parseInt(count/3);
}
