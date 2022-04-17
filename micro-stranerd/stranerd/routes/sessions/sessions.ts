import { QueryParams, QueryResults } from '../../../commons'
import { SessionEntity } from '../../entities/sessions/sessions'

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
		middlewares: ['isAuthenticated', 'specifiedTutorIdIsAStranerdTutor'],
		inputs: {
			message: string, tutorId: string, duration: number, isScheduled: boolean, scheduledAt: number | null
		},
		validations: {
			message: ['is string', 'a chat message to send to the tutor to identify what the student needs help with'],
			tutorId: ['is string', 'the id of the tutor the student needs a session with'],
			duration: ['is number', 'the length of the session in minutes', 'must be in the supported list from the server - 15, 30, 60, 120, 180'],
			isScheduled: ['is boolean', 'true if session starts later, false if session starts immediately tutor accepts'],
			scheduledAt: ['is number if isScheduled is true, is null if false', 'the unix timestamp of the time the student wants the session to start if the session is scheduled']
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