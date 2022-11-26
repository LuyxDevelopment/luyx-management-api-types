import { AuthorityLevel, UserPositionTitle, UserSubPosition } from '../index.js';
import { CountryCode } from '../utils/country_codes.js';
import { TimeZone } from '../utils/timezones.js';
import { Base } from './base.js';

export interface APIUser extends Base {
	alias: string;
	avatar: string;
	firstName: string;
	lastName: string;
	isPrivate: boolean;
	contact: {
		discordId: string;
		email: string;
		gitHub: string;
	};
	hiredAt: number;
	info: {
		countryCode: CountryCode;
		dob: number;
		timeZone: TimeZone;
	};
	authorityLevel: AuthorityLevel,
	subPositions: UserSubPosition[];
	position: UserPositionTitle;
	projects: number;
	wallet: string;
}