enum Conditions {
	lt = 'lt', lte = 'lte', gt = 'gt', gte = 'gte',
	eq = 'eq', ne = 'ne', in = 'in', nin = 'nin'
}

type Where = { field: string, value: any, condition?: Conditions }
type WhereBlock = { condition: QueryKeys, value: (Where | WhereBlock)[] }
type WhereClause = Where | WhereBlock

enum QueryKeys { and = 'and', or = 'or' }

export type QueryParams = {
	where?: WhereClause[]
	auth?: WhereClause[]
	whereType?: QueryKeys
	authType?: QueryKeys
	sort?: [{ field: string, desc?: boolean }]
	limit?: number
	all?: boolean
	page?: number
	search?: { value: string, fields: string[] }
}

export type QueryResults<Model> = {
	pages: {
		start: number,
		last: number,
		previous: number | null,
		next: number | null,
		current: number,
	},
	docs: {
		limit: number,
		total: number,
		count: number
	},
	results: Model[]
}

export interface MediaOutput {
	name: string
	type: string
	size: number
	path: string
	timestamp: number
	link: string | null
}