import { QueryParams, QueryResults } from '../../../commons'
import { TagEntity } from '../../entities/questions/tags'

export type TagsRoutes = [
	{
		route: '/questions/tags/',
		description: 'Route to get list of tags'
		method: 'GET',
		middlewares: [],
		inputs: QueryParams,
		validations: {},
		response: QueryResults<TagEntity>
	},
	{
		route: '/questions/tags/:id',
		description: 'Route to get an tag'
		method: 'GET',
		middlewares: [],
		inputs: {},
		validations: {},
		response: TagEntity | null
	}
]