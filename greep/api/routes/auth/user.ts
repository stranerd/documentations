import { AuthUserEntity } from '../../entities/auth/users'
import { MediaOutput } from '../../../commons'

export type UserRoutes = [
	{
		route: '/auth/user',
		description: 'Route to get authUser details'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: AuthUserEntity
	},
	{
		route: '/auth/user/signout',
		description: 'Route to signout'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: boolean
	},
	{
		route: '/auth/user',
		description: 'Route to update user details'
		method: 'PUT',
		middlewares: ['isAuthenticated'],
		inputs: {
			firstName: string,
			middleName: string,
			lastName: string,
			description: string,
			photo: MediaOutput | null
		},
		validations: {
			firstName: ['is a string', 'is longer than 2 characters'],
			middleName: ['is a string', 'is longer than 2 characters'],
			lastName: ['is a string', 'is longer than 2 characters'],
			description: ['is a string'],
			photo: ['is an image or null']
		},
		response: AuthUserEntity
	},
	{
		route: '/auth/user/roles',
		description: 'Route to update user roles'
		method: 'POST',
		middlewares: ['isAuthenticated', 'isAdmin'],
		inputs: {
			userId: string,
			app: string,
			role: string,
			value: boolean
		},
		validations: {
			userId: ['is a string', 'id of the user that you want to modify their role'],
			role: ['is a string', 'name of the role being modified. It should be one of the keys in the authRoles except isSuperAdmin'],
			value: ['is a boolean', 'value of the role being modified']
		},
		response: boolean
	},
	{
		route: '/auth/user/superAdmin',
		description: 'Route to set superAdmin role on the saved email in api. This is here as a safety mechanism in case a malicious admin decides to unset other admins roles. The user associated with the saved email gets superAdmin role and can undo the malicious actions. This is the only way for a user to get the role: isSuperAdmin '
		method: 'GET',
		inputs: {},
		validations: {},
		response: boolean
	},
]
