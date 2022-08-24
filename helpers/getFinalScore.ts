export const getFinalScore = (results: any) => {
    // updateScore(questionNb, answer, results);
    let scores = Object.values(results);
    let highestScore = 0
    //find the highest score in the results object
    scores.forEach((nb: any) => {
        if (nb > highestScore) {
            highestScore = nb
        }
    })
    //find the index matching the highest score in the scores array and then find the matching key in the results object
    return Object.keys(results)[scores.indexOf(highestScore)]
}