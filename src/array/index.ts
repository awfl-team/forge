import { Maybe, Primitive } from '../type'

export const convertToMap = <T, KEY>(
  toMap: Maybe<T[]>,
  keyOfElement: (toMapElement: T) => Maybe<KEY>
): Map<KEY, T> | undefined => {
  return toMap?.reduce((map, obj) => {
    const key = keyOfElement(obj)

    return key !== undefined && key !== null ? map.set(key, obj) : map
  }, new Map<KEY, T>())
}
export const cleanPrimitiveDuplicate = (
  array: Primitive[] | undefined
): Primitive[] => [...new Set(array)]

export const concat = <T>(arr1: T[], arr2: T[]): T[] => [...arr1, ...arr2]

export const compact = <T>(arr: Maybe<T[]>): T[] | undefined =>
  arr?.filter((value) => !!value)

export const isEmpty = <T>(arr: Maybe<T[]>): boolean => !arr?.length
