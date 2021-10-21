export interface TransactionEntity {
	id: string
	event: string
	amount: number
	isGold: boolean
	userId: string
	createdAt: number
	updatedAt: number
}