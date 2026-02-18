export const isEmptyObject = (obj: Record<string, unknown>): boolean =>
  Object.keys(obj).length === 0;

export const deepClone = <T>(value: T): T => structuredClone(value);
