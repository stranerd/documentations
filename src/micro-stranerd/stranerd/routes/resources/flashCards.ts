import { QueryParams, QueryResults } from '../../../commons'
import { FlashCardEntity } from '../../entities/resources/flashCards'

export type FlashCardsRoutes = [
	{
		route: '/resources/flashCards/',
		description: 'Route to get list of flashCards'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<FlashCardEntity>
	},
	{
		route: '/resources/flashCards/:id',
		description: 'Route to get a flashCard'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: FlashCardEntity | null
	},
	{
		route: '/resources/flashCards/',
		description: 'Route to create a flashCard'
		method: 'POST',
		middlewares: ['isAuthenticated'],
		inputs: {
			set: { question: string, answer: string }[]
			tags: string[]
		},
		validations: {
			set: ['is an array of objects containing a question and an answer', 'has at least 1 element', 'has less than 26 elements'],
			tags: ['is an array of string', 'tags associated with the flashCard']
		},
		response: FlashCardEntity
	},
	{
		route: '/resources/flashCards/:id',
		description: 'Route to update a flashCard'
		method: 'PUT',
		middlewares: ['isAuthenticated', 'isOwner'],
		inputs: {
			set: { question: string, answer: string }[]
			tags: string[]
		},
		validations: {
			set: ['is an array of objects containing a question and an answer', 'has at least 1 element', 'has less than 26 elements'],
			tags: ['is an array of string', 'tags associated with the flashCard']
		},
		response: FlashCardEntity
	},
	{
		route: '/resources/flashCards/:id',
		description: 'Route to delete a flashCard'
		method: 'DELETE',
		middlewares: ['isAuthenticated', 'isOwner'],
		inputs: {},
		validations: {},
		response: boolean
	}
]