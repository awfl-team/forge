export const isEmptyObject = <T extends Record<string, unknown>>(
  toTest?: T | null | undefined
): toTest is T =>
  !(!!toTest && Object.values(toTest).some((value) => value != null))
