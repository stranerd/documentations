export interface NotificationEntity {
	id: string
	body: string
	action: string
	userId: string
	data: Record<string, any>
	createdAt: number
	seen: boolean
	updatedAt: number
}