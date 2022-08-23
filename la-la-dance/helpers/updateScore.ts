import { UpdateScoreFunction } from '../ts-utils/types' 

export const updateScore:UpdateScoreFunction = (questionsList, questionNb, answer, results) => {
    let keysToScore = questionsList[questionNb].score[answer];
    keysToScore.forEach((key: string | number) => {
        results[key] = results[key] + 1
    } )
    return results
}