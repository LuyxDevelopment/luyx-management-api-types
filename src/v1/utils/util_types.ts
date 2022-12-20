export type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type PartialPick<T, U extends keyof T, V extends keyof T> = DeepPartial<Pick<T, U>> & Pick<T, V>;