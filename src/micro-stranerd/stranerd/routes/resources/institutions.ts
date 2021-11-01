import { QueryParams, QueryResults } from '../../../commons'
import { InstitutionEntity } from '../../entities/resources/institutions'

export type InstitutionsRoutes = [
	{
		route: '/resources/institutions/',
		description: 'Route to get list of institutions'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<InstitutionEntity>
	},
	{
		route: '/resources/institutions/:id',
		description: 'Route to get an institution'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: InstitutionEntity | null
	},
	{
		route: '/resources/institutions/',
		description: 'Route to create an institution'
		method: 'POST',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {
			name: string
		},
		validations: {
			name: ['is a string', 'is longer than 2 chars']
		},
		response: InstitutionEntity
	},
	{
		route: '/resources/institutions/:id',
		description: 'Route to update an institution'
		method: 'PUT',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {
			name: string
		},
		validations: {
			name: ['is a string', 'is longer than 2 chars'],
		},
		response: InstitutionEntity
	},
	{
		route: '/resources/institutions/:id',
		description: 'Route to delete an institution'
		method: 'DELETE',
		middlewares: ['isAuthenticated', 'isStranerdAdmin'],
		inputs: {},
		validations: {},
		response: boolean
	}
]