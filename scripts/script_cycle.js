const usersArr = [
  { name: "user1", age: 20, profession: "programmer", isCloseFriend: true },
  { name: "user2", age: 30, profession: "footballer", isCloseFriend: false },
  { name: "user4", age: 20, profession: "programmer", isCloseFriend: true },
  { name: "user5", age: 30, profession: "footballer", isCloseFriend: false },
  { name: "user6", age: 20, profession: "programmer", isCloseFriend: true },
  { name: "user7", age: 30, profession: "footballer", isCloseFriend: false },
  { name: "user8", age: 20, profession: "programmer", isCloseFriend: true },
  { name: "user9", age: 30, profession: "footballer", isCloseFriend: false },
  { name: "user10", age: 20, profession: "programmer", isCloseFriend: true },
  { name: "user11", age: 30, profession: "footballer", isCloseFriend: false },
];
//
console.log(usersArr);
console.log(usersArr.length);
//
for (let i = 0; i < usersArr.length; i++) {
  //   console.log(usersArr[i]);
}
//
for (const item of usersArr) {
  //   console.log(item);
}
//
const obj = {
  name: "user1",
  age: 20,
  profession: "programmer",
  isCloseFriend: true,
};
//
for (const key in obj) {
  //   console.log(obj[key]);
}
//
let i = 0;
// while (i < usersArr.length) {
//   //   console.log(usersArr[i]);
//   i++;
// }
//
// do {
//   console.log(usersArr[i]);
//   i++;
// } while (i > 0);
const numberArr = [1, 2, 3, 4, 5];
//
function squareArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    // arr[i] *= 2;
    // arr[i] = arr[i] * 2;
    // arr[i] = 2;
    // arr[i] = arr[i] * arr[i];
    arr[i] *= arr[i];
  }
  return arr;
}
console.log(squareArr(numberArr));
