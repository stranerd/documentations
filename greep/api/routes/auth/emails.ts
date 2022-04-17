import { AuthUserEntity } from '../../entities/auth/users'
import { MediaOutput } from '../../../commons'

export type EmailRoutes = [
	{
		route: '/auth/emails/signin',
		description: 'Route to signin with email'
		method: 'POST',
		middlewares: [],
		inputs: {
			email: string,
			password: string
		},
		validations: {
			email: ['is a valid email'],
			password: ['is a string']
		},
		response: {
			accessToken: string,
			refreshToken: string,
			user: AuthUserEntity
		}
	},
	{
		route: '/auth/emails/signup',
		description: 'Route to signup with email'
		method: 'POST',
		middlewares: [],
		inputs: {
			email: string,
			password: string,
			firstName: string,
			middleName: string,
			lastName: string,
			description: string,
			photo: MediaOutput | null
		},
		validations: {
			email: ['is a valid email'],
			password: ['is a string', 'is longer than 7 characters', 'is shorter than 17 characters'],
			firstName: ['is a string', 'is longer than 0 characters'],
			middleName: ['is a string'],
			lastName: ['is a string'],
			description: ['is a string'],
			photo: ['is an image or null']
		},
		response: {
			accessToken: string,
			refreshToken: string,
			user: AuthUserEntity
		}
	},
	{
		route: '/auth/emails/verify/mail',
		description: 'Route to send the verification email. This sends an email, with a link to a page to complete verification. A param named token is also passed with the link'
		method: 'POST',
		middlewares: [],
		inputs: {
			email: string,
			redirectUrl: string
		},
		validations: {
			email: ['is a valid email'],
			redirectUrl: ['is a string', 'this is the url of the page that is used to complete verification']
		},
		response: boolean
	},
	{
		route: '/auth/emails/verify',
		description: 'Route to complete verification.'
		method: 'POST',
		middlewares: [],
		inputs: {
			email: string,
			redirectUrl: string
		},
		validations: {
			token: ['is a string', 'this is the token passed as a param in the link in the verification email']
		},
		response: {
			accessToken: string,
			refreshToken: string,
			user: AuthUserEntity
		}
	},
]
