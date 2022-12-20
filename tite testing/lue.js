const elves = [[1_000,2_000,3_000], [4_000], [5_000,6_000], [7_000, 8_000,9_000],[10_000]];
const elvesMostCal = [];
let totalCal = 0;

getMostCalories();

console.log(elvesMostCal);
console.log(Math.max(...elvesMostCal));
console.log(Math.max(elvesMostCal.indexOf(Math.max(...elvesMostCal))));

function setTotalCal(index) {
	elves[index].forEach((val) => {
		totalCal += val;
	});
	elvesMostCal.push(totalCal);
	totalCal = 0;
}

function getMostCalories() {
	for (let index = 0; index < elves.length; index++) {
		setTotalCal(index);
	}
}
