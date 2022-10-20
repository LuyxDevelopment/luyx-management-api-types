import { Base } from './base.js';

export enum TransactionStatus {
	RECIPIENT_NOT_FOUND,
	NOT_ENOUGH_FUNDS,
}

export interface Wallet extends Base {
	balance: number;
}
