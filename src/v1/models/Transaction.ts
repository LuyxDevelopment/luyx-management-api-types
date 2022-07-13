import mongoose from 'mongoose';

export enum TransactionStage {
	WITHDRAWAL_PENDING,
	DEPOSIT_PENDING,
	COMPLETED,
	FAILED,
}

export enum TransactionType {
	WITHDRAWAL,
	DEPOSIT,
	TRANSFER,
}

export interface Transaction {
	amount: number;
	transactionType: TransactionType;
	timestamp: number;
	description: string;
	from: null | mongoose.Types.ObjectId;
	to: null | mongoose.Types.ObjectId;
	transactionStage: TransactionStage;
}
