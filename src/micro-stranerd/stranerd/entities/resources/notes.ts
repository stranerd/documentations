import { MediaOutput } from '../../../utils/entities'
import { UserBio } from '../../commons'

export type NoteEntity = {
	id: string,
	isHosted: boolean // is true if the note is hosted on our servers, is false if hosted on an external service
	link: string | null // is null if isHosted is true
	media: MediaOutput | null // is null if isHosted is false
	userId: string
	userBio: UserBio
	title: string
	description: string
	tags: string[]
	createdAt: number
	updatedAt: number
}
