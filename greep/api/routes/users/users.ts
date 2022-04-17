import { QueryParams, QueryResults } from '../../../commons'
import { UserEntity } from '../../entities/users/users'

export type UsersRoutes = [
	{
		route: '/users/users',
		description: 'Route to get a list of users'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<UserEntity>
	},
	{
		route: '/users/users/:id',
		description: 'Route to get a particular user'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: UserEntity | null
	},
	{
		route: '/users/users/drivers/add',
		description: 'Route to add a new driver with the auth user as the manager'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			driverId: string
			commission: number
		},
		validations: {
			driverId: ['is a string', 'the id of the user that you want to set as a driver', 'NB: this user must not be driving for anyone at the time this request is sent'],
			commission: ['is a number', 'must be between 0 and 1 to match the percentage the manager gets']
		},
		response: boolean
	},
	{
		route: '/users/users/drivers/update',
		description: 'Route to update the commission of one of the auth user\'s drivers'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			driverId: string
			commission: number
		},
		validations: {
			driverId: ['is a string', 'the id of the driver'],
			commission: ['is a number', 'must be between 0 and 1 to match the percentage the manager gets']
		},
		response: boolean
	},
	{
		route: '/users/users/drivers/remove',
		description: 'Route to remove a driver from the auth user'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			driverId: string
		},
		validations: {
			driverId: ['is a string', 'the id of the driver that you want to remove'],
		},
		response: boolean
	}
]