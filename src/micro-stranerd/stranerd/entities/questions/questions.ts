import { MediaOutput } from '../../../utils/entities'
import { UserBio } from '../../commons'

export type QuestionEntity = {
	id: string
	body: string
	coins: number
	tags: string[]
	attachments: MediaOutput[]
	subjectId: string
	userId: string
	userBio: UserBio
	bestAnswers: string[]
	answers: { id: string, userId: string }[]
	commentsCount: number
	createdAt: number
	updatedAt: number

	creditable: number // just a helper, cant be used as a property when querying, no of coins that can be gotten for answering this question
	isAnswered: boolean // just a helper, cant be used as a property when querying. returns true if bestAnswers.length >= 2
}
