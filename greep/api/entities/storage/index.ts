export interface MediaOutput {
	name: string
	type: string
	size: number
	path: string
	timestamp: number
	link: string | null
	// The link property is only null when using a local backend.
	// So when you hit the upload file route and get a MediaOutput and the link is null,
	// just set it ot the baseUrl of the server used + the path property
}
