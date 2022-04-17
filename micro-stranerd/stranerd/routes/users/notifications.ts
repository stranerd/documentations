import { QueryParams, QueryResults } from '../../../commons'
import { NotificationEntity } from '../../entities/users/notifications'

export type NotificationsRoutes = [
	{
		route: '/users/notifications',
		description: 'Route to get a list of notifications'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<NotificationEntity>
	},
	{
		route: '/users/notifications/:id',
		description: 'Route to get a particular notification'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: NotificationEntity | null
	},
	{
		route: '/users/notifications/:id/seen',
		description: 'Route to mark a particular notification as seen'
		method: 'PUT',
		middlewares: ['isAuthenticated'],
		inputs: {
			seen: boolean
		},
		validations: {
			seen: ['is boolean', 'used to toggle the value of seen of the notification']
		},
		response: boolean
	}
]