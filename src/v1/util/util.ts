export type PartialPick<T, U extends keyof T, V extends keyof T> = Partial<Pick<T, U>> & Pick<T, V>;

export type DeepPartial<T> = T extends object ? {
	[P in keyof T]?: DeepPartial<T[P]>;
} : T;