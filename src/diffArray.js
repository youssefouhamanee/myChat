function diffArray(arr1, arr2) {
	let newArr = [];
	let arr = arr1.concat(arr2).sort();
	console.log(arr);
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

console.log(diffArray([1, 2, 3, 4, 5], [1, 2, 3, 5]));
