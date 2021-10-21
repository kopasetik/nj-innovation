const convertTime = require('../js/convertTime')

describe('changes ISO date to human readable date', ()=>{

    it('shows date, time, zone', ()=>{
        expect(convertTime(`2021-09-17T17:35:00+00:00`)).toEqual(`10:35 AM (GMT-7) on September 17th, 2021`)
    })    
})