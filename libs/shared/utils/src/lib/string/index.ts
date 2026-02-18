export const capitalize = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const truncate = (value: string, length: number): string =>
  value.length > length ? value.slice(0, length) + '...' : value;
