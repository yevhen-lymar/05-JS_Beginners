const usersArr = [
  { name: "user1", age: 20, profession: "programmer" },
  { name: "user2", age: 30, profession: "footballer" },
  { name: "user4", age: 20, profession: "programmer" },
  { name: "user5", age: 30, profession: "footballer" },
  { name: "user6", age: 20, profession: "programmer" },
  { name: "user7", age: 30, profession: "footballer" },
  { name: "user8", age: 20, profession: "programmer" },
  { name: "user9", age: 30, profession: "footballer" },
  { name: "user10", age: 20, profession: "programmer" },
  { name: "user11", age: 30, profession: "footballer" },
];
// console.log(usersArr);
//
// додавання елементу до масиву, на кінець масиву
const addNewUsers = true;
const deleteUsers = true;
const spliceUsers = true;
//
if (addNewUsers) {
  usersArr.push({ name: "user3", age: 25, profession: "teacher" });
}
//додавання елементу до масиву, на початок масиву
if (addNewUsers) {
  usersArr.unshift({ name: "user3", age: 25, profession: "teacher" });
}
//видалення елементу з масиву, з кінець масиву
if (deleteUsers) {
  usersArr.pop();
}
//видалення елементу з масиву, з початок масиву
if (deleteUsers) {
  usersArr.shift();
}
//
console.log(usersArr);
console.log(typeof usersArr);
//додає, або видаляє
if (spliceUsers) {
  usersArr.splice(2, 5, { name: "user3", age: 25, profession: "teacher" });
}
//
//
function congratsIfMoreThan10(arr) {
  if (arr.length > 10) {
    alert(
      `Congratulation! You have more than 10 subscribers! Count: ${arr.length}`
    );
  } else {
    alert(`It's bed! Count: ${arr.length}`);
  }
}
congratsIfMoreThan10(usersArr);
