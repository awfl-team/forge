export type Primitive =
  | number
  | null
  | string
  | boolean
  | symbol
  | bigint
  | undefined

export type Maybe<T> = T | Nullish

export type Nullish = undefined | null
