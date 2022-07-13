import mongoose from 'mongoose';

export enum TransactionStatus {
	RECIPIENT_NOT_FOUND,
	NOT_ENOUGH_FUNDS,
}

export interface Wallet {
	balance: number;
	transactions: mongoose.Types.ObjectId[];
}
