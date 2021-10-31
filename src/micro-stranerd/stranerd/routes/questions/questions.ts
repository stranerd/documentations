import { QueryParams, QueryResults } from '../../../commons'
import { QuestionEntity } from '../../entities/questions/questions'
import { MediaOutput } from '../../../utils/entities'

export type QuestionsRoutes = [
	{
		route: '/questions/questions/',
		description: 'Route to get list of questions'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<QuestionEntity>
	},
	{
		route: '/questions/questions/:id',
		description: 'Route to get a question'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: QuestionEntity | null
	},
	{
		route: '/questions/questions/',
		description: 'Route to create a question'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			body: string
			subjectId: string
			coins: number
			tags: string[]
			attachments: MediaOutput[]
		},
		validations: {
			body: ['is a string', 'parsed html content of string is longer than 2 chars'],
			subjectId: ['is a string', 'id of subject associated with the question'],
			coins: ['is a number', 'amount of coins to deduct for asking the question'],
			tags: ['is an array of strings', 'tags associated with the question'],
			attachments: ['is an array of media', 'attachments associated with the question']
		},
		response: QuestionEntity
	},
	{
		route: '/questions/questions/:id',
		description: 'Route to update a question'
		method: 'PUT',
		middlewares: ['isAuthenticated'],
		inputs: {
			body: string
			subjectId: string
			tags: string[]
			attachments: MediaOutput[]
		},
		validations: {
			body: ['is a string', 'parsed html content of string is longer than 2 chars'],
			subjectId: ['is a string', 'id of subject associated with the question'],
			tags: ['is an array of strings', 'tags associated with the question'],
			attachments: ['is an array of media', 'attachments associated with the question']
		},
		response: QuestionEntity
	},
	{
		route: '/questions/questions/:id',
		description: 'Route to delete a question'
		method: 'DELETE',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: boolean
	},
	{
		route: '/questions/questions/:id/best',
		description: 'Route to mark a answer as a question\'s best answer'
		method: 'PUT',
		middlewares: ['isAuthenticated'],
		inputs: {
			answerId: string
		},
		validations: {
			answerId: ['is a string', 'id of the answer to mark as best']
		},
		response: boolean
	}
]