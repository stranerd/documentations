import { QueryParams, QueryResults } from '../../../commons'
import { ChatMetaEntity } from '../../entities/sessions/chatMetas'

export type ChatMetasRoutes = [
	{
		route: '/sessions/chatMetas',
		description: 'Route to get authUsers list of chatMetas'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<ChatMetaEntity>
	},
	{
		route: '/sessions/chatMetas/:id',
		description: 'Route to get a particular chatMeta'
		method: 'GET',
		middlewares: ['isAuthenticated'],
		inputs: {},
		validations: {},
		response: ChatMetaEntity | null
	}
]