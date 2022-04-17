import { ReportEntity } from '../../entities/reports/reports'
import { QueryParams, QueryResults } from '../../../commons'

export type ReportsRoutes = [
	{
		route: '/reports/reports',
		description: 'Route to get list of reports'
		method: 'GET',
		middlewares: ['isStranerdAdmin'],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<ReportEntity>
	},
	{
		route: '/reports/reports/:id',
		description: 'Route to get a report'
		method: 'GET',
		middlewares: ['isStranerdAdmin'],
		inputs: {},
		validations: {},
		response: ReportEntity | null
	},
	{
		route: '/reports/reports/:id',
		description: 'Route to delete a report'
		method: 'DELETE',
		middlewares: ['isStranerdAdmin'],
		inputs: {},
		validations: {},
		response: boolean
	},
	{
		route: '/reports/reports',
		description: 'Route to create a report'
		method: 'POST',
		middlewares: ['isStranerdAdmin'],
		inputs: {
			type: string, message: string, reportedId: string
		},
		validations: {
			type: ['is a string', 'type of the entity being reported', 'must be in [users, questions, answers]'],
			message: ['is a string']
			reportedId: ['is a string', 'id of the entity being reported - either a user, question, answer']
		},
		response: ReportEntity
	}
]