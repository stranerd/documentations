import { AuthUserEntity } from './entities'
import { MediaOutput } from '../utils/entities'

export type EmailRoutes = [
	{
		route: '/emails/signin',
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
		route: '/emails/signup',
		description: 'Route to signup with email'
		method: 'POST',
		middlewares: [],
		inputs: {
			email: string,
			password: string,
			firstName: string,
			lastName: string,
			description: string,
			photo: MediaOutput | null
			referrer: string | null
		},
		validations: {
			email: ['is a valid email'],
			password: ['is a string', 'is longer than 7 characters', 'is shorter than 17 characters'],
			firstName: ['is a string', 'is longer than 2 characters'],
			lastName: ['is a string', 'is longer than 2 characters'],
			description: ['is a string'],
			photo: ['is an image or null'],
			referrer: ['is a string or null', 'this is the id of the user that referred the new user']
		},
		response: {
			accessToken: string,
			refreshToken: string,
			user: AuthUserEntity
		}
	},
	{
		route: '/emails/verify/mail',
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
		route: '/emails/verify',
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

export type IdentityRoutes = [
	{
		route: '/identities/google',
		description: 'Route to signin with google'
		method: 'POST',
		middlewares: [],
		inputs: {
			idToken: string
		},
		validations: {
			idToken: ['is a string', 'After completing signin with google, an idToken is returned to identify the account on the backend']
		},
		response: {
			accessToken: string,
			refreshToken: string,
			user: AuthUserEntity
		}
	},
]

export type TokenRoutes = [
	{
		route: '/token',
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

export type UserRoutes = [
	{
		route: '/user',
		description: 'Route to get authUser details'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: AuthUserEntity
	},
	{
		route: '/user/signout',
		description: 'Route to signout'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: boolean
	},
	{
		route: '/user',
		description: 'Route to update user details'
		method: 'PUT',
		middlewares: ['isAuthenticated'],
		inputs: {
			firstName: string,
			lastName: string,
			description: string,
			photo: MediaOutput | null
		},
		validations: {
			firstName: ['is a string', 'is longer than 2 characters'],
			lastName: ['is a string', 'is longer than 2 characters'],
			description: ['is a string'],
			photo: ['is an image or null']
		},
		response: AuthUserEntity
	},
	{
		route: '/user/roles',
		description: 'Route to update user roles'
		method: 'POST',
		middlewares: ['isAuthenticated', 'isAnAdminInTheSpecifiedRoute'],
		inputs: {
			userId: string,
			app: string,
			role: string,
			value: boolean
		},
		validations: {
			userId: ['is a string', 'id of the user that you want to modify their role'],
			app: ['is a string', 'name of the app under which roles you are modifying. For stranerd app, it should always be `stranerd`'],
			role: ['is a string', 'name of the role being modified. For stranerd app, it should be either `isAdmin` or `isTutor`'],
			value: ['is a boolean', 'value of the role being modified']
		},
		response: boolean
	},
]

export type PasswordRoutes = [
	{
		route: '/passwords/update',
		description: 'Route to update current password. Only works if the user has email in his authTypes'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			oldPassword: string,
			password: string
		},
		validations: {
			oldPassword: ['is a string'],
			password: ['is a string', 'is longer than 7 characters', 'is shorter than 17 characters']
		},
		response: boolean
	},
	{
		route: '/passwords/verify/mail',
		description: 'Route to send the password reset email. This sends an email, with a link to a page to reset password. A param named token is also passed with the link'
		method: 'POST',
		middlewares: [],
		inputs: {
			email: string,
			redirectUrl: string
		},
		validations: {
			email: ['is a valid email'],
			redirectUrl: ['is a string', 'this is the url of the page that is used to reset password']
		},
		response: boolean
	},
	{
		route: '/passwords/verify',
		description: 'Route to complete password reset.'
		method: 'POST',
		middlewares: [],
		inputs: {
			token: string,
			password: string
		},
		validations: {
			token: ['is a string', 'this is the token passed as a param in the link in the password reset email'],
			password: ['is a string', 'is longer than 7 characters', 'is shorter than 17 characters']
		},
		response: {
			accessToken: string,
			refreshToken: string,
			user: AuthUserEntity
		}
	},
]