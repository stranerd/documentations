import { MediaOutput } from '../../../utils/entities'

export type PastQuestionEntity = {
	id: string,
	order: number
	institutionId: string
	courseId: string
	year: number
	question: string
	questionMedia: MediaOutput[]
	createdAt: number
	updatedAt: number
}

export type PastQuestionTheoryEntity = PastQuestionEntity & {
	answer: string
	answerMedia: MediaOutput[]
}

export type PastQuestionObjEntity = PastQuestionEntity & {
	correctIndex: number
	options: string[]
	optionsMedia: MediaOutput[][]
	explanation: string
	explanationMedia: MediaOutput[]
}
