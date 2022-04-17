import { UserBio } from '../../commons'

export type FlashCardEntity = {
	id: string,
	set: { question: string, answer: string }[]
	userId: string
	userBio: UserBio
	tags: string[]
	createdAt: number
	updatedAt: number
}