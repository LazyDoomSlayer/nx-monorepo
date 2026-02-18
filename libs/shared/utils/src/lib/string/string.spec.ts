import { describe, expect, it } from 'vitest';
import { capitalize, truncate } from './index.js';

describe('string.utils', () => {
  it('capitalize uppercases first letter', () => {
    expect(capitalize('lazydoomslayer')).toBe('Lazydoomslayer');
  });

  it('capitalize works with empty string', () => {
    expect(capitalize('')).toBe('');
  });

  it('truncate returns same string if shorter than limit', () => {
    expect(truncate('hello', 10)).toBe('hello');
  });

  it('truncate adds ellipsis if longer than limit', () => {
    expect(truncate('hello world', 5)).toBe('hello...');
  });
});
