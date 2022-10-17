function miniMaxSum(arr: number[]) {
	let totalsArr: number[] = [];
	for (let i = 0; i < 5; i++) {
		let tempArr = JSON.parse(JSON.stringify(arr));
		tempArr.splice(i, 1);
		let total: number = tempArr.reduce(
			(partial: number, a: number) => partial + a,
			0
		);
		totalsArr.push(total);
	}
	const max = Math.max(...totalsArr);
	const min = Math.min(...totalsArr);
	console.log(`${min} ${max}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
