import { describe, expect, it } from 'vitest';
import { deepClone, isEmptyObject } from './index.js';

describe('object.utils', () => {
  it('isEmptyObject returns true for empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it('isEmptyObject returns false for non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  it('deepClone creates a deep copy', () => {
    const original = { a: 1, nested: { b: 2 } };
    const cloned = deepClone(original);

    expect(cloned).toEqual(original);
    expect(cloned).not.toBe(original);
    expect(cloned.nested).not.toBe(original.nested);
  });
});
