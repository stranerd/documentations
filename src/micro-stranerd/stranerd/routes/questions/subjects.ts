import { QueryParams, QueryResults } from '../../../commons'
import { SubjectEntity } from '../../entities/questions/subjects'

export type SubjectsRoutes = [
	{
		route: '/questions/subjects/',
		description: 'Route to get list of subjects'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<SubjectEntity>
	},
	{
		route: '/questions/subjects/:id',
		description: 'Route to get an subject'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: SubjectEntity | null
	},
	{
		route: '/questions/subjects/',
		description: 'Route to create an subject'
		method: 'POST',
		middlewares: ['isAdmin'],
		inputs: {
			name: string
		},
		validations: {
			name: ['is a string', 'name of subject'],
		},
		response: SubjectEntity
	},
	{
		route: '/questions/subjects/:id',
		description: 'Route to delete an subject'
		method: 'DELETE',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: boolean
	}
]