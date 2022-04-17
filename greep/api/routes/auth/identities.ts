import { AuthUserEntity } from '../../entities/auth/users'

export type IdentityRoutes = [
	{
		route: '/auth/identities/google',
		description: 'Route to signin with google'
		method: 'POST',
		middlewares: [],
		inputs: {
			idToken: string
			accessToken: string
		},
		validations: {
			idToken: ['is a string', 'After completing signin with google on client, an idToken & accessToken is returned to identify the account on the backend'],
			accessToken: ['is a string', 'After completing signin with google on client, an idToken & accessToken is returned to identify the account on the backend']
		},
		response: {
			accessToken: string,
			refreshToken: string,
			user: AuthUserEntity
		}
	},
]
