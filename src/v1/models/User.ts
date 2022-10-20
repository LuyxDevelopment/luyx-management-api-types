import { CountryCode } from '../util/country_codes.js';
import { TimeZone } from '../util/timezones.js';
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
	projects: number;
	jobTitles: string[];
	wallet: Wallet;
}