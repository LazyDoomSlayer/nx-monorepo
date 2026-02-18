import type { Id, IsoDateTime } from '../primitives/index.js';

export interface BaseEntity {
  id: Id;
  createdAt: IsoDateTime;
  updatedAt: IsoDateTime;
}
