export type Brand<T, B extends string> = T & { readonly __brand: B };

export type Id = Brand<string, 'Id'>;
export type IsoDateTime = Brand<string, 'IsoDateTime'>;
export type IsoDate = Brand<string, 'IsoDate'>;

export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
