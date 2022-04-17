import { QueryParams, QueryResults } from '../../../commons'
import { ReviewEntity } from '../../entities/users/reviews'

export type ReviewsRoutes = [
	{
		route: '/users/reviews',
		description: 'Route to get a list of reviews'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<ReviewEntity>
	},
	{
		route: '/users/reviews/:id',
		description: 'Route to get a particular review'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: ReviewEntity | null
	},
	{
		route: '/users/reviews',
		description: 'Route to create a new review'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			rating: number, review: string, tutorId: string
		},
		validations: {
			rating: ['is a number', 'must be between 1 and 5'],
			review: ['is a string']
			tutorId: ['is a string']
		},
		response: ReviewEntity
	}
]