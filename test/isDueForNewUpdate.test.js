/**
 * @jest-environment jsdom
 */

const isDueForNewUpdate = require('../js/isDueForNewUpdate')

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

describe('sees if update was 5+ mins ago', ()=>{

    it('returns false if last update happened in past 5 mins', ()=>{
        const justNow = Date.now()
        localStorage.setItem('lastUpdated', justNow)
        
 expect(isDueForNewUpdate(localStorage)).toEqual(false)
    })


    
    it('returns true if last update did not happen in past 5 mins', ()=>{
        
        const fiveMins = 5 * 60 * 1000
    
    const moreThanFiveMinsAgo = Date.now()-(fiveMins+5000)
    localStorage.setItem('lastUpdated', moreThanFiveMinsAgo)      
       
 expect(isDueForNewUpdate(localStorage)).toEqual(true)
    })
})