import {
  cleanPrimitiveDuplicate,
  compact,
  concat,
  convertToMap,
  isEmpty,
} from './index'

describe('array', () => {
  describe('concat', () => {
    it('should concat two arrays', () => {
      expect(concat([1], [2])).toEqual([1, 2])
    })
  })

  describe('cleanPrimitiveDuplicate', () => {
    it('should clean duplicate', () => {
      expect(cleanPrimitiveDuplicate([1, 1, 1])).toEqual([1])
    })
  })

  describe('convertToMap', () => {
    it('should transform array to map', () => {
      expect(
        convertToMap([{ id: 1 }, { id: 2 }, { id: 3 }], (o) => o.id)
      ).toEqual(
        new Map([
          [1, { id: 1 }],
          [2, { id: 2 }],
          [3, { id: 3 }],
        ])
      )
    })
  })

  describe('compact', () => {
    it('should clean all falsy value', () => {
      expect(compact([false, null, 0, '', undefined, NaN])).toEqual([])
    })

    it('should return undefined with maybe value', () => {
      expect(compact(undefined)).toEqual(undefined)
    })
  })

  describe('isEmpty', () => {
    it('should true on empty array', () => {
      expect(isEmpty([])).toEqual(true)
    })

    it('should return false on not empty array', () => {
      expect(isEmpty([1])).toEqual(false)
    })

    it('should return true on undefined array', () => {
      expect(isEmpty(undefined)).toEqual(true)
    })
  })
})
