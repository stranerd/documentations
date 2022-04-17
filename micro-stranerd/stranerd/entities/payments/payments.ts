export enum PaymentType {
	BuyCoins = 'BuyCoins'
}

export enum SupportedCurrencies {
	USD = 'USD',
	NGN = 'NGN'
}

export type PaymentEntity = {
	id: string,
	type: PaymentType,
	data: Record<string, any>,
	amount: number, // This amount is in the smaller denominator eg an amount of 100 with USD is 100cents/1 dollar or with NGN is 100 kobo/1 naira
	method: 'stripe',
	intent: string
	userId: string,
	currency: SupportedCurrencies
	createdAt: number,
	updatedAt: number,
	isCompleted: boolean
}

export interface BuyCoinsPaymentEntity extends PaymentEntity {
	type: PaymentType.BuyCoins
	data: {
		gold: number
		bronze: number
	}
}