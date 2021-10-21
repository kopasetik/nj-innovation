/**
 * @jest-environment jsdom
 */



const fetchPrice = require('../js/fetchPrice') 

describe('call the api', () => {
    it('should contact the api and receive an object as a response', () => {
        fetchPrice()
            .then(res => res.json()).then((data) => expect(typeof data).toEqual('object')).catch(e => console.error(e))
    })
        
        
    it('should have all 3 currencies', () => {
        fetchPrice().then(res => res.json()).then(({bpi}) => expect(bpi.USD).toMatchObject({code: 'USD'}))
                                                  
        fetchPrice().then(res => res.json()).then(({bpi}) => expect(bpi.EUR).toMatchObject({code: 'EUR'}))
                                                  
        fetchPrice().then(res => res.json()).then(({bpi}) => expect(bpi.GBP).toMatchObject({code: 'GBP'}))
    
    })
})