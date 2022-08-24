import { UpdateScoreFunction } from '../ts-utils/types' 

export const updateScore:UpdateScoreFunction = (testData, questionNb, answer, score) => {
    let keysToScore = testData[questionNb].score[answer];
    keysToScore.forEach((key: string | number) => {
        score[key] = score[key] + 1
    } )
    return score
}