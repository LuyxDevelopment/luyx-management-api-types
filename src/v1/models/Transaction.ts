import { Base } from './base.js';

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

export interface Transaction extends Base {
	amount: number;
	transactionType: TransactionType;
	timestamp: number;
	description: string;
	from: null | string;
	to: null | string;
	transactionStage: TransactionStage;
}
