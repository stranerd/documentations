import { QueryParams, QueryResults } from '../../../commons'
import { AnswerUpvoteEntity } from '../../entities/questions/answerUpvotes'

export type AnswerUpvotesRoutes = [
	{
		route: '/questions/answerUpvotes/',
		description: 'Route to get list of answerUpvotes'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<AnswerUpvoteEntity>
	},
	{
		route: '/questions/answerUpvotes/:id',
		description: 'Route to get an answerUpvote'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: AnswerUpvoteEntity | null
	},
	{
		route: '/questions/answerUpvotes/:answerId/vote',
		description: 'Route to vote on an answer'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			vote: boolean
		},
		validations: {
			vote: ['is a boolean', 'true for upvote, false for downvote']
		},
		response: AnswerUpvoteEntity
	}
]