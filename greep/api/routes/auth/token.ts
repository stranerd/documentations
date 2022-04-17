import { AuthUserEntity } from '../../entities/auth/users'

export type TokenRoutes = [
	{
		route: '/auth/token',
		description: 'Route to get new tokens after accessToken has expired'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: {
			accessToken: string,
			refreshToken: string,
			user: AuthUserEntity
		}
	},
]