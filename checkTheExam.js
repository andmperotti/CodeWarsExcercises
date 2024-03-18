//https://www.codewars.com/kata/5a3dd29055519e23ec000074

// DESCRIPTION:
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0


function checkExam(array1, array2) {
	//We need to iterate through the 2 arrays at the same time and check the submitted answers (array2) to each correct answer(array1), since the arrays are the same length, we'll just iterate through one of them 
	//Since there are possible outcomes per iteration, +4 if correct, -1 if incorrect, +0 if blank; we need to use a temporary variable to hold the students total score

	let result = 0
	for(let i = 0; i<array1.length; i++){
		if(array2[i]===array1[i]){
			result+=4
		}else if(array2[i]===''){
			result+=0
		}else if(array2[i]!==array1[i]){
			result-=1
		}
	}
	return result<0 ? 0: result;
}
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))

//best practice voted code was very similar.