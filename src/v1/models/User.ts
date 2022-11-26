import { AuthorityLevel, UserPositionTitle as UserPosition, UserSubPosition } from '../index.js';
import { CountryCode } from '../utils/country_codes.js';
import { TimeZone } from '../utils/timezones.js';
import { Base } from './base.js';

export interface User extends Base {
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
	position: UserPosition;
	projects: number;
	wallet: string;
}