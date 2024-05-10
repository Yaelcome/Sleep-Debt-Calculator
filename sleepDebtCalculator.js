//
const getSleepHours = day => {

switch (day) {
  case 'monday':
  return 8;
  break;
  case 'tuesday':
  return 12;
  break;
  case 'wednesday':
  return 6;
  break;
  case 'thursday':
  return 9;
  break;
  case 'friday':
  return 8;
  break;
  case 'saturday':
  return 8;
  break;
  case 'sunday':
  return 7;
  break;
  default:
  console.log("Error! Please input a day of the week")
}
};
getSleepHours('monday');
console.log(getSleepHours('monday'))


// 
const getActualSleepHours = () => {
  const actualHours = getSleepHours('monday') +
                      getSleepHours('tuesday') +
                      getSleepHours('wednesday') +
                      getSleepHours('thursday') +
                      getSleepHours('friday') +
                      getSleepHours('saturday') +
                      getSleepHours('sunday');
  return actualHours
};

console.log(`Actual Sleep Hours: ${getActualSleepHours()}`);

//
const getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours * 7
};

console.log(`Ideal Sleep Hours: ${getIdealSleepHours()}`);

//
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep this week');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You slept too much old man! You got ${Math.abs(actualSleepHours - idealSleepHours)} hours more sleep than you needed this week`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You should sleep some more. You need to catch up ${Math.abs(idealSleepHours - actualSleepHours)} hours of sleep`);
  }
};
calculateSleepDebt()
//console.log(calculateSleepDebt())
