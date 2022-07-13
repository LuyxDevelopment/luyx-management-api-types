import mongoose from 'mongoose';

export interface Project {
	name: string;
	description: string;
	startedAt: number;
	deadline: number;
	wallet: mongoose.Types.ObjectId;
	assignedUsers: mongoose.Types.ObjectId[];
}
