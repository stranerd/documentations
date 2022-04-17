import { MediaOutput } from '../../../utils/entities'

export type ChatEntity = {
	id: string,
	path: [string, string], // first element is the sender's id, second is the receiver's
	from: string, // just a helper, cant be queried against. It just point to the first element in the path array
	content: string | null,
	media: MediaOutput | null,
	createdAt: number
	updatedAt: number
	readAt: number | null
	sessionId: string | null
}