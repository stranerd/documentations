import { MediaOutput } from '../../../utils/entities'

export type PastQuestionEntity = {
	id: string,
	order: number
	institutionId: string
	courseId: string
	year: number
	question: string
	questionMedia: MediaOutput[]
	answer: string
	createdAt: number
	updatedAt: number
}

export type PastQuestionTheoryEntity = PastQuestionEntity & {
	answerMedia: MediaOutput[]
}

export type PastQuestionObjEntity = PastQuestionEntity & {
	a: string
	b: string
	c: string
	d: string
	e: string
	aMedia: MediaOutput[]
	bMedia: MediaOutput[]
	cMedia: MediaOutput[]
	dMedia: MediaOutput[]
	eMedia: MediaOutput[]
}