import { UserBio } from '../../commons'

export interface ReviewEntity {
	id: string
	review: string
	rating: number
	tutorId: string
	userId: string
	userBio: UserBio
	createdAt: number
	updatedAt: number
}