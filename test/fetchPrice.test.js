/**
 * @jest-environment jsdom
 */

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

const fetchPrice = require('../js/fetchPrice') 

describe('call the api', () => {
    it('should contact the api and receive an object as a response', () => {
        fetchPrice(localStorage)
            .then((data) => expect(typeof data).toEqual('object'))
    })
        
        
    it('should have all 3 currencies', async () => {
       const USD = await fetchPrice(localStorage)
            .then(({USD}) => expect(USD).toMatchObject({code: 'USD'}))
                                                  
        await fetchPrice(localStorage)
        .then(({EUR}) => expect(EUR).toMatchObject({code: 'EUR'}))
                                                  
        await fetchPrice(localStorage)
            .then(({GBP}) => expect(GBP).toMatchObject({code: 'GBP'}))
    
    })
})