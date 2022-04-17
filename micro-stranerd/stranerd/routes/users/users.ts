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
		route: '/users/users/streak',
		description: 'Route to update auth user\'s streak'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: {
			skip: boolean
			increase: boolean
			reset: boolean
			streak: number
		}
	},
	{
		route: '/users/users/subjects',
		description: 'Route to update auth user\'s strongest and weaker subjects'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			strongestSubject: string
			weakerSubjects: string[]
		},
		validations: {
			strongestSubject: ['is a string', 'the id of the subject selected as strongest subject'],
			weakerSubjects: ['is an array of string', 'an array of the ids of subjects selected, the ids have to be unique in the list and none of them must be the id of the strongest subject']
		},
		response: boolean
	}
]