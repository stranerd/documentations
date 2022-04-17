import { QueryParams, QueryResults } from '../../../commons'
import { TransactionEntity, TransactionType } from '../../entities/users/transactions'

export type TransactionsRoutes = [
	{
		route: '/users/transactions',
		description: 'Route to get a list of the auth user\'s transactions where he/she is the driver or manager'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<TransactionEntity>
	},
	{
		route: '/users/transactions/:id',
		description: 'Route to get a particular transaction that belongs to the auth user where he/she is the driver or manager'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: TransactionEntity | null
	},
	{
		route: '/users/users/transactions',
		description: 'Route to create a transaction with the auth user as the driver, and his manager/himself as the manager of the transaction'
		method: 'POST',
		middlewares: [],
		inputs: {
			amount: number
			description: string
			recordedAt: number
			data: {
				type: TransactionType.trip | TransactionType.expense | TransactionType.balance
				name: string,
				parentId: string,
				customerName: string,
				paidAmount: number,
				paymentType: 'cash' | 'card'
			}
		},
		validations: {
			amount: ['is a number', 'is greater that 0'],
			description: ['is a string'],
			recordedAt: ['is an number', 'is the unix timestamp(up to the microseconds) that the user chose the transaction occurred at'],
			'data.type': ['is a string', 'must be one of the supported types in Transaction.data'],
			'data.name': ['is only required if the type is expense', 'is a string', 'is longer than 0'],
			'data.parentId': ['is only required if the type is balance', 'is a string', 'is longer than 0', 'must be the id of an existing trip type transaction that has debt > 0'],
			'data.customerName': ['is only required if the type is trip', 'is a string', 'is longer than 0', 'customer gets automatically created for the driver'],
			'data.paidAmount': ['is only required if the type is trip', 'is a number', 'must be less than or equal to amount', 'is used to calculate debt of the transaction'],
			'data.paymentType': ['is only required if the type is trip', 'is a string', 'must be either cash or card'],
		},
		response: TransactionEntity
	},
	{
		route: '/users/transactions/:id',
		description: 'Route to delete a transaction. Only the manager can delete a transaction to prevent foul play'
		method: 'DELETE',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: boolean
	}
]