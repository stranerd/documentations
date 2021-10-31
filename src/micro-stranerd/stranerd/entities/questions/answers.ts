import { MediaOutput } from '../../../utils/entities'
import { UserBio } from '../../commons'

export type AnswerEntity = {
	id: string
	title: string
	body: string
	coins: number
	questionId: string
	tags: string[]
	attachments: MediaOutput[]
	createdAt: number
	updatedAt: number
	userId: string
	userBio: UserBio
	best: boolean
	votes: { userId: string, vote: 1 | -1 }[]
	commentsCount: number

	totalVotes: number // just a helper, cant be used as a property when querying, returns summation of the votes
}
