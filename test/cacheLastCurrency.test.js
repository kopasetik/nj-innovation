/**
 * @jest-environment jsdom
 */

const cacheLastCurrency = require('../js/cacheLastCurrency')

const mockStorage = function () {
  let store = {}

  return {
    getItem: function (key) {
      return store[key] || null
    },
    setItem: function (key, value) {
      store[key] = value.toString()
    },
    removeItem: function (key) {
      delete store[key]
    },
    clear: function () {
      store = {}
    }
  }
}

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: mockStorage(),
    })
  })

  afterAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: null,
    })
  })

describe('caches the latest currency',  ()=>{
    
    it('saves it to local storage', ()=>{
        localStorage.setItem('lastCurrency', 'pounds')
        cacheLastCurrency(localStorage, 'euros')
                expect(localStorage.getItem('lastCurrency')).toEqual('euros')
        
    
    })
})