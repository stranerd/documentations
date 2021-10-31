import { QueryParams, QueryResults } from '../../../commons'
import { ChatEntity } from '../../entities/sessions/chats'
import { MediaOutput } from '../../../utils/entities'

export type ChatMetasRoutes = [
	{
		route: '/sessions/chats',
		description: 'Route to get authUsers list of chats'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<ChatEntity>
	},
	{
		route: '/sessions/chats/:id',
		description: 'Route to get a particular chat'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: ChatEntity | null
	},
	{
		route: '/sessions/chats',
		description: 'Route to create a chat'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			to: string, sessionId: string | null, media: MediaOutput | null, content: string | null
		},
		validations: {
			to: ['is string', 'the id of the user you are sending the message to'],
			sessionId: ['is string or null', 'the id of the session that you are currently in with the user you are sending the message to'],
			content: ['is string or null', 'the body of the chat, leave as null if the chat is a file'],
			media: ['is media file or null', 'the file send in the chat, leave null if the chat is just text']
		},
		response: ChatEntity
	},
	{
		route: '/sessions/chats/:id/read',
		description: 'Route to mark a chat as read'
		method: 'PUT',
		middlewares: ['isAuthenticated'],
		inputs: {
			to: string
		},
		validations: {
			to: ['is string', 'the id of the user that sent the message to you']
		},
		response: boolean
	}
]