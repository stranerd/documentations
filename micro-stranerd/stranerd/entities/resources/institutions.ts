// institution is basically a school or a gateway body, eg unilag, jamb, ui, waec

export type InstitutionEntity = {
	id: string,
	name: string,
	isSchool: boolean,
	isGateway: boolean,
	createdAt: number,
	updatedAt: number
}
