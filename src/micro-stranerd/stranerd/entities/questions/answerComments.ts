import { UserBio } from '../../commons'

export type AnswerCommentEntity = {
	id: string
	body: string
	userId: string
	answerId: string
	userBio: UserBio
	createdAt: number
	updatedAt: number
}
