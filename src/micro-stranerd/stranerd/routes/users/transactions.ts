import { QueryParams, QueryResults } from '../../../commons'
import { TransactionEntity } from '../../entities/users/transactions'

export type TransactionsRoutes = [
	{
		route: '/users/transactions',
		description: 'Route to get a list of transactions'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<TransactionEntity>
	},
	{
		route: '/users/transactions/:id',
		description: 'Route to get a particular transaction'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: TransactionEntity | null
	}
]