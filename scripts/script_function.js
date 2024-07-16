const sixNine = 69;
const fourTwoZero = 420;

const one = 1;
const two = 2;

const fourTwo = 42;

function addTwoNumbers(a, b) {
  const result = a + b;

  return result;
}

const fourEightNine = addTwoNumbers(sixNine, fourTwoZero); // 489
const three = addTwoNumbers(one, two); // 3
const oneOneOne = addTwoNumbers(fourTwo, sixNine); // 111

const fourNineTwo = addTwoNumbers(fourEightNine, three); // 492

console.log(addTwoNumbers(addTwoNumbers(fourEightNine, three), oneOneOne));
