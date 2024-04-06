// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here
minScore = Number.MAX_VALUE

for (let i = 0; i < scores.length; i++) {
    if (scores[i] < minScore) {
        minScore = scores[i]
    }
}

console.log(minScore);
