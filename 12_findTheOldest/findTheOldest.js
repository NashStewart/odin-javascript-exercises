const getAge = function(person) {
  let oldestYear = person.yearOfDeath;
  if (person.yearOfDeath == undefined) { oldestYear = new Date().getFullYear(); }
  return oldestYear - person.yearOfBirth;
};

const findTheOldest = function(people) {
  return people.sort((a, b) => getAge(b) - getAge(a))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
