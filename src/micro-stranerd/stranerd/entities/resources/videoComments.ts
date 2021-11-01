import { UserBio } from '../../commons'

export type VideoCommentEntity = {
	id: string
	body: string
	userId: string
	videoId: string
	userBio: UserBio
	createdAt: number
	updatedAt: number
}
