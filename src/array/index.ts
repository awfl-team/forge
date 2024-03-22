//intersection
//separation

import { Primitive } from "../type";

export const convertToMap = <T, KEY>(
  toMap: T[] | undefined | null,
  keyOfElement: (toMapElement: T) => KEY | undefined | null
): Map<KEY, T> | undefined => {
  return toMap?.reduce((map, obj) => {
    const key = keyOfElement(obj)
    if (key !== undefined && key !== null) map.set(key, obj)

    return map
  }, new Map<KEY, T>())
}

export const cleanPrimitiveDuplicate = (array: Primitive[]): Primitive[] => [...new Set(array)]

export const merge = <T>(arr1: T[], arr2: T[]): T[] => [...arr1, ...arr2];


