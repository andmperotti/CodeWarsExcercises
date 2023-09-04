//https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
function twoSort(s) {
	s.sort();
	return s[0].split('').join('***')
}