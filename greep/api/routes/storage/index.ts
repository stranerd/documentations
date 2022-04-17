import { MediaOutput } from '../../entities/storage'

export type StorageRoutes = [
	{
		route: '/storage/file',
		description: 'Route to upload a file'
		method: 'POST',
		middlewares: [],
		inputs: {
			path: string,
			file: 'a valid file from the browser FileAccessApi'
		},
		validations: {
			path: ['is a string', 'is used to organize related files in related folders eg for questions attachments, you can add a path `questions/attachments`'],
			file: ['is a file', 'must be less than 100mb']
		},
		response: MediaOutput
	},
	{
		route: '/storage/files',
		description: 'Route to upload multiple files at once'
		method: 'POST',
		middlewares: [],
		inputs: {
			path: string,
			file: 'a valid file from the browser FileAccessApi'[]
		},
		validations: {
			path: ['is a string', 'is used to organize related files in related folders eg for questions attachments, you can add a path `questions/attachments`'],
			file: ['is an array of files', 'all elements must be less than 100mb']
		},
		response: MediaOutput[]
	}
]