import { MediaOutput } from '../utils/entities'

export type UserBio = {
	email: string
	firstName: string
	lastName: string
	description: string
	photo: MediaOutput | null
}

export enum RankTypes {
	Rookie = 'Rookie',
	Comrade = 'Comrade',
	Scholar = 'Scholar',
	Wizard = 'Wizard',
	Einstein = 'Einstein'
}