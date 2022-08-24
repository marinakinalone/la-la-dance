import { UpdateScoreFunction } from '../ts-utils/types' 

export const updateScore:UpdateScoreFunction = (testData, questionNb, answer, results) => {
    let keysToScore = testData[questionNb].score[answer];
    keysToScore.forEach((key: string | number) => {
        results[key] = results[key] + 1
    } )
    return results
}