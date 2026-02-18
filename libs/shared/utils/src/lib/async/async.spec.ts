import { describe, expect, it, vi } from 'vitest';
import { sleep, withTimeout } from './index.js';

describe('async.utils', () => {
  it('sleep resolves after given ms', async () => {
    vi.useFakeTimers();

    const promise = sleep(1000);
    vi.advanceTimersByTime(999);
    // still pending, so we don't await yet

    vi.advanceTimersByTime(1);
    await expect(promise).resolves.toBeUndefined();

    vi.useRealTimers();
  });

  it('withTimeout resolves when promise resolves in time', async () => {
    vi.useFakeTimers();

    const p = withTimeout(
      new Promise<string>((resolve) => setTimeout(() => resolve('ok'), 50)),
      200,
    );

    vi.advanceTimersByTime(50);
    await expect(p).resolves.toBe('ok');

    vi.useRealTimers();
  });

  it('withTimeout rejects when timeout exceeded', async () => {
    vi.useFakeTimers();

    const p = withTimeout(
      new Promise<string>((resolve) => setTimeout(() => resolve('late'), 500)),
      100,
    );

    vi.advanceTimersByTime(100);
    await expect(p).rejects.toThrow('Timeout exceeded');

    vi.useRealTimers();
  });
});
