import mongoose from 'mongoose';

export interface User {
	firstName: string;
	lastName: string;
	contact: {
		discordId: string | null;
		email: string;
		phone: string | null;
	};
	assignedProjects: mongoose.Types.ObjectId[];
	hiredAt: number;
	jobTitles: string[];
	wallet: mongoose.Types.ObjectId;
}
