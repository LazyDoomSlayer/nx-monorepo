export type ApiError = {
  message: string;
  code?: string;
  details?: unknown;
};

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: ApiError };

export type Pagination = {
  page: number;
  pageSize: number;
};

export type Paginated<T> = {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
};

export type SortDirection = 'asc' | 'desc';

export type Sort = {
  field: string;
  direction: SortDirection;
};

export type ListQuery = Partial<Pagination> & {
  search?: string;
  sort?: Sort;
};
