export type AnswerUpvoteEntity = {
	id: string
	vote: 1 | -1 // 1 for upvote, -1 for downvote
	userId: string
	answerId: string
	createdAt: number
	updatedAt: number
}
