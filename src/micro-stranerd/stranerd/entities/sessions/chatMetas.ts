import { ChatEntity } from './chats'
import { UserBio } from '../../commons'

export type ChatMetaEntity = {
	id: string,
	unRead: string[],
	ownerId: string,
	userId: string,
	userBio: UserBio,
	last: ChatEntity,
	createdAt: number,
	updatedAt: number
}