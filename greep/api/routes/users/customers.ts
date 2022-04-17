import { QueryParams, QueryResults } from '../../../commons'
import { CustomerEntity } from '../../entities/users/customers'

// NB: Customers are automatically created on the api when their name is used in a transaction, and no endpoint is supported to create one outside the concept of a transaction
export type CustomersRoutes = [
	{
		route: '/users/customers',
		description: 'Route to get a list of the auth user\'s customers'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<CustomerEntity>
	},
	{
		route: '/users/customers/:id',
		description: 'Route to get a particular customer that belongs to the auth user'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: CustomerEntity | null
	}
]