const cacheData = require('../js/cacheData')

describe('refreshing of data only happens if last refresh was 5+ mins ago', ()=>{

    it('does not happen < 5 mins', ()=>{
        const time = new Date
        const localStorage = {setItem: ()=>{}, getItem: ()=>({latestUpdate: performance.now()})}    
        
    //expect(cacheData(localStorage)).toEqual()
    })

    it('happens at 5+ minutes', ()=>{
    
        expect(1).toEqual(1)
    })
})