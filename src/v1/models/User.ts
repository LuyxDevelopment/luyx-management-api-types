import { AuthorityLevel, UserPosition } from '../index.js';
import { CountryCode } from '../utils/country_codes.js';
import { TimeZone } from '../utils/timezones.js';
import { Base } from './base.js';
import { Wallet } from './Wallet.js';

export interface User extends Base {
	alias: string;
	firstName: string;
	lastName: string;
	private: boolean;
	contact: {
		discordId: string;
		email: string;
		gitHub: string;
		phone: string | null;
	};
	hiredAt: number;
	info: {
		countryCode: CountryCode;
		dob: number;
		timeZone: TimeZone;
	};
	authorityLevel: AuthorityLevel,
	positions: UserPosition[];
	projects: number;
	wallet: Wallet;
	getFullName(): string;
}