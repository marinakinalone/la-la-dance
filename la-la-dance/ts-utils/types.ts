import { TestDataContent, Score } from './interfaces';

export type UpdateScoreFunction = (questionsList: Array<TestDataContent>, questionNb: number, answer: number, results: any) => Score