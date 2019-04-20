const server = require('./server.js');
const request = require('supertest');

    describe('it should get all games from the server', () => {
        it('should return HTTP status code 200', () => {
            return request(server)
            .get('/games')
            .then(res=>{
                expect(res.status).toBe(200)
            })
        })

        it('should return 200 OK using the squad', () => {
            const res = await request(server).get('/games')

            expect(res.status).toBe(200)
        })

        it('should return JSON', async() => {
            const res = await request(server).get('/games')
            expect(res.type).toBe('application/json')
        })

        it('should return an empty array', () => {
            const res = await request(server).get('/games')
            expect(res.body).toEqual([])
        })
    })