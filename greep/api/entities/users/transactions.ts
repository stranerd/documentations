export enum TransactionType {
	expense = 'expense',
	trip = 'trip',
	balance = 'balance'
}

type ExpenseType = {
	type: TransactionType.expense
	name: string
}

type TripType = {
	type: TransactionType.trip
	customerName: string
	paymentType: 'card' | 'cash'
	paidAmount: number
	debt: number
}

type BalanceType = {
	type: TransactionType.balance
	parentId: string
}

export interface TransactionEntity {
	id: string,
	createdAt: number,
	updatedAt: number,
	recordedAt: number,
	driverId: string,
	managerId: string,
	amount: number,
	description: string,
	data: ExpenseType | TripType | BalanceType
}