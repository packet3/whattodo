// function square (x) {
//     return x * x;
// };


// console.log(square(3));

// // const squreArrow = (y) => {
// //     return y * y;
// // };

// const squreArrow = (y) => y * y;


// console.log(squreArrow(9));
const fullName = 'Joe Moore';
const splitName = (fullName) => {
    return fullName.split(' ')[0];
   
};
console.log(splitName(fullName));

const splitNameArrow = (fullName) => fullName.split(' ')[0];
console.log(splitNameArrow(fullName));