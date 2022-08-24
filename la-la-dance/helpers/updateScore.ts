import { UpdatePointsFunction } from '../ts-utils/types' 

export const updatePoints:UpdatePointsFunction = (data, answer, points) => {
    let keysToScore = data.score[answer];
    keysToScore.forEach((key: string | number) => {
        points[key] = points[key] + 1
    } )
    return points
}