function timeConversion(s: string) {
	if (s.includes('PM') && s.startsWith('12')) {
		const res = s.slice(0, -2);
		return res;
	} else if (s.includes('AM') && s.startsWith('12')) {
		let sArr: string[] = s.split('');
		sArr.shift();
		sArr.shift();
		sArr.pop();
		sArr.pop();
		let milHours = '00';
		sArr.unshift(milHours);
		return sArr.join('');
	} else if (s.includes('PM')) {
		let sArr: string[] = s.split('');
		let hours = sArr[0] + sArr[1];
		sArr.shift();
		sArr.shift();
		sArr.pop();
		sArr.pop();
		let intHours: number = parseInt(hours, 10);
		intHours = intHours + 12;
		let milHours = intHours.toString();
		sArr.unshift(milHours);
		return sArr.join('');
	} else {
		let sArr: string[] = s.split('');
		sArr.pop();
		sArr.pop();
		return sArr.join('');
	}
}
