import { merge } from './index'

describe('merge', () => {
  it('merge two array', () => {
    expect(merge([1], [2])).toEqual([1, 2])
  })
})
