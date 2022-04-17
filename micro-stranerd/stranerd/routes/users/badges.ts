import { BadgeEntity } from '../../entities/users/badges'

export type BadgesRoutes = [
	{
		route: '/users/badges',
		description: 'Route to get the auth user badge'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: BadgeEntity | null
	}
]