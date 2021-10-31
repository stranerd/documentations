import { QueryParams, QueryResults } from '../../../commons'
import { SessionEntity } from '../../entities/sessions/sessions'
import { MediaOutput } from '../../../utils/entities'

export type SessionMetasRoutes = [
	{
		route: '/sessions/sessions',
		description: 'Route to get authUsers sessions that match query passed in'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<SessionEntity>
	},
	{
		route: '/sessions/sessions/:id',
		description: 'Route to get a particular session'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: SessionEntity | null
	},
	{
		route: '/sessions/sessions',
		description: 'Route to create a session'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			to: string, sessionId: string | null, media: MediaOutput | null, content: string | null
		},
		validations: {
			to: ['is string', 'the id of the user you are sending the message to'],
			sessionId: ['is string or null', 'the id of the session that you are currently in with the user you are sending the message to'],
			content: ['is string or null', 'the body of the session, leave as null if the session is a file'],
			media: ['is media file or null', 'the file send in the session, leave null if the session is just text']
		},
		response: SessionEntity
	},
	{
		route: '/sessions/sessions/:id/accept',
		description: 'Route to accept/reject a session. Should only be hit by the tutor of the session'
		method: 'PUT',
		middlewares: ['isAuthenticated'],
		inputs: {
			accepted: boolean
		},
		validations: {
			accepted: ['is a boolean', 'true to accept the session, false to reject the session'],
		},
		response: boolean
	},
	{
		route: '/sessions/sessions/:id/end',
		description: 'Route to end a session if the student is satisfied before it is time. Should only be hit by the student of the session'
		method: 'PUT',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: boolean
	},
	{
		route: '/sessions/sessions/:id/cancel',
		description: 'Route to cancel a session if the tutor doesn\'t accept in time. Should only be hit by the student of the session'
		method: 'PUT',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: boolean
	},
]