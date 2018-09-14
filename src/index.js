module.exports = function check(str, bracketsConfig) {
	str = str.split("");
	opBrackets = [];
	clBrackets = [];
	amountOf = [];
	function divideBrackets(resArr, divArrIndex) {
		for(var i = 0; i < bracketsConfig.length; i++) {
			resArr[i] = (bracketsConfig[i])[divArrIndex];
        }
    }
	divideBrackets(opBrackets, 0);
	divideBrackets(clBrackets, 1);
	opBrackets.forEach((elem) => amountOf[elem] = 0);
	clBrackets.forEach((elem) => amountOf[elem] = 0);
	function task(arr) {
		var testArr = [];
		var solution = true;
		for(var i = 0; i < arr.length; i++) {
			if(opBrackets.includes(arr[i])) {
				if(!clBrackets.includes(arr[i])) {
					testArr.push(arr[i]);
                }
				else {
					if(testArr.includes(arr[i]) && testArr[testArr.length - 1] == arr[i]) {
						testArr.pop();
                    } else if(testArr.includes(arr[i]) && testArr[testArr.length - 1] != arr[i]) {
						i = arr.length;
						solution = false;
                    } else testArr.push(arr[i]);
                }
            }
			else {
				if(testArr.length > 0) {
					if(opBrackets.indexOf(testArr[testArr.length - 1]) == clBrackets.indexOf(arr[i])) {
                        testArr.pop(testArr[testArr.length - 1]);
                    }
                    else {
                        i = arr.length;
                        solution = false;
                    }
                }
				else {
					i = arr.length;
					solution = false;
                }
            }
        }
		if(testArr.length > 0) solution = false;
		return solution;
    }
	return task(str);
}
