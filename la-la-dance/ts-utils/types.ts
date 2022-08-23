import { QuestionsListItem } from './interfaces';

export type UpdateScoreFunction = (questionsList: Array<QuestionsListItem>, questionNb: number, answer: number, results: any) => void