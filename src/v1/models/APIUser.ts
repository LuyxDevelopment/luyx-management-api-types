import { AuthorityLevel, CountryCode, TimeZone, UserPositionTitle, UserSubPosition } from '../index.js';
import { Base } from './base.js';

export interface APIUser extends Base {
	alias: string;
	avatarURL: string;
	firstName: string;
	lastName: string;
	isPrivate: boolean;
	contact: {
		discordId: string;
		email: string;
		gitHub: string | null;
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