import { AuthorityLevel, UserPosition } from '../index.js';
import { CountryCode } from '../utils/country_codes.js';
import { TimeZone } from '../utils/timezones.js';
import { Base } from './base.js';
import { Wallet } from './Wallet.js';

export interface User extends Base {
	firstName: string;
	lastName: string;
	alias: string | null;
	contact: {
		discordId: string | null;
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
	authorityLevel: {
		type: number,
		default: AuthorityLevel.MEMBER,
	}
	positions: UserPosition[];
	projects: number;
	wallet: Wallet;
	getFullName(): string;
}