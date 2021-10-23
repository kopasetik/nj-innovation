/**
 * @jest-environment jsdom
 */

const cacheFetchData = require('../js/cacheFetchData')

fetchPrice = jest.fn().mockResolvedValue([{
    EUR: {
        code: "EUR", 
        symbol: "&euro;", 
        rate: "52,360.6421", 
        description: "Euro"
    },
    GBP: {
        code: "GBP", 
        symbol: "&pound;", 
        rate: "44,282.3820", 
        description: "British Pound Sterling"
    },
                             
    USD: {
        code: "USD", 
        symbol: "&#36;", 
        rate: "60,975.3633", 
        description: "United States Dollar"
    }},
                                          {
                                              updated: "Oct 22, 2021 15:47:00 UTC", 
                                              updatedISO: "2021-10-22T15:47:00+00:00"
                                          }])

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

describe('caches update time and exchange rates',  ()=>{
    
    it('happens at 5+ minutes', async ()=>{
     
        await cacheFetchData(localStorage, fetchPrice)
        
    expect(localStorage.getItem('lastUpdated')).not.toEqual(null)
        expect(localStorage.getItem('dollars')).toEqual('60975.36')
                expect(localStorage.getItem('euros')).toEqual('52360.64')
        expect(localStorage.getItem('pounds')).toEqual('44282.38')
                expect(localStorage.getItem('ISODate')).toEqual('2021-10-22T15:47:00+00:00')
        
    
    })
})
