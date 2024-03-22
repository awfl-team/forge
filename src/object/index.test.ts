import { isEmptyObject } from './index'

describe('object', () => {
  describe('isEmptyObject', () => {
    it('should return true on empty object', () => {
      expect(isEmptyObject({})).toEqual(true)
    })
  })
})
