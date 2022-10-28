export enum StatusCodes {
	API_RUNNING = 200,
	FORBIDDEN_REQUEST = 403,
	METHOD_NOT_ALLOWED = 405,
	PROJECT_CREATED = 201,
	PROJECT_DELETED = 200,
	PROJECT_FOUND = 200,
	PROJECT_HAS_USER = 400,
	PROJECT_NOT_FOUND = 404,
	PROJECT_REQUIRED_DATA_MISSING = 400,
	PROJECT_UPDATED = 200,
	PROJECT_USER_ALREADY_ASSIGNED = 409,
	PROJECT_USER_ASSIGNED = 200,
	PROJECT_USER_NOT_FOUND = 404,
	PROJECT_USER_UNASSIGNED = 200,
	ROUTE_NOT_FOUND = 404,
	TOKEN_CREATED = 201,
	TOKEN_MISSING = 400,
	TOKEN_UNAUTHORIZED = 401,
	TRANSACTION_DEPOSIT_SENT = 200,
	TRANSACTION_FOUND = 200,
	TRANSACTION_NOT_ENOUGH_FUNDS = 400,
	TRANSACTION_NOT_FOUND = 404,
	TRANSACTION_FROM_WALLET_NOT_FOUND = 404,
	TRANSACTION_FROM_WALLET_REQUIRED = 400,
	TRANSACTION_TO_WALLET_NOT_FOUND = 404,
	TRANSACTION_TO_WALLET_REQUIRED = 400,
	TRANSACTION_TRANSFER_SENT = 200,
	TRANSACTION_TRANSFER_WALLETS_REQUIRED = 400,
	TRANSACTION_WITHDRAW_SENT = 200,
	USER_CREATED = 201,
	USER_DELETED = 200,
	USER_FOUND = 200,
	USER_HAS_BALANCE = 409,
	USER_HAS_PROJECT = 400,
	USER_NOT_FOUND = 404,
	USER_REQUIRED_DATA_MISSING = 400,
	USER_UPDATED = 200,
	WALLET_NOT_FOUND = 404,
}