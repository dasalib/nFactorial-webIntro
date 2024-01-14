
// Object { key: value}
const vehicle = {};
vehicle.brandName = "BMW";
vehicle.model = "X5";
vehicle.model = "M1";
delete vehicle.model;

let salaries = {
	Aroo: 100,
	Dalida: 160,
	Samat: 130
}
let ans = 0;

for (let x in salaries){
    ans+=salaries[x];
}

console.log(ans);