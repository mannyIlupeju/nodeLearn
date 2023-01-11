const sayName = () => {
  console.log('Hello Manny');
}

const sayAddress = () => {
  console.log('Johnson street')
}

module.exports.sayName = sayName;
module.exports.sayAddress = sayAddress;