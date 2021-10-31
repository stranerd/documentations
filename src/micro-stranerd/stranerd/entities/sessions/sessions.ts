import { UserBio } from '../../commons'

export type SessionEntity = {
	id: string,
	duration: number,
	price: number,
	message: string,
	studentId: string,
	tutorId: string,
	studentBio: UserBio,
	tutorBio: UserBio,
	accepted: boolean | null,
	done: boolean,
	cancelled: { tutor: boolean, student: boolean },
	wasCancelled: boolean // just a helper, cant be used as a property when querying
	createdAt: number,
	updatedAt: number,
	startedAt: number | null
	endedAt: number | null
	taskIds: string | number[] // Ignore this property on the frontend, it is only needed on the backend
	isScheduled: boolean
	scheduledAt: number | null
}