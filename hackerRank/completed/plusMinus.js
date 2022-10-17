function plusMinus(arr) {
	const denominator = arr.length;
	let positiveArr = [];
	let negativeArr = [];
	let neutralArr = [];

	arr.forEach((number) => {
		if (number > 0) {
			positiveArr.push(number);
		} else if (number < 0) {
			negativeArr.push(number);
		} else {
			neutralArr.push(number);
		}
	});
	const positiveRatio = (positiveArr.length / denominator).toFixed(6);
	const negativeRatio = (negativeArr.length / denominator).toFixed(6);
	const neutralRatio = (neutralArr.length / denominator).toFixed(6);

	console.log(positiveRatio);
	console.log(negativeRatio);
	console.log(neutralRatio);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
