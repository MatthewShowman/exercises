let sequenceA = [1, 2, 3];
sequenceA.push(4);
sequenceA.push(5);
console.log(sequenceA);

let sequenceB = [1, 2, 3, 4, 5];
console.log(sequenceB.pop());
console.log(sequenceB);


//working with objects

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  console.log(day1.squirrel);
  // → false
  console.log(day1.wolf);
  // → undefined
  day1.wolf = false;
  console.log(day1.wolf);
  // → false
  console.log(day1.events[2]);
  day1.events.push("scratching");
  console.log(day1.events[4]);