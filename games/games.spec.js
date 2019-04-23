const gamesDb = require('../games/gamesModel');
const db = require('../data/dbConfig.js');
const server = require('../api/server.js');
const request = require('supertest');

describe('games model', () =>{

    
    describe('/POST insert()', () =>{
        afterEach(async () =>{
            await db('games').truncate()
        })

        it('should insert the provided games into the db 201 Status', async()=>{
            await gamesDb.insert({ title: 'newGame', genre: 'shooter', releaseYear: '2019'})
            await gamesDb.insert({ title: 'newGame2', genre: 'RPG', releaseYear: '2007'})
            const games = await db('games')
            expect(games[0].title).toBe('newGame')
            expect(games).toHaveLength(2)
            expect(201)

        })

        it('should insert the right game', async()=>{
            await gamesDb.insert({ title: 'newGame', genre: 'ARPG', releaseYear: '2006' });
            const games = await db('games')
            expect(games[0].title).toBe('newGame')

        })

        it('if content is missing, respond with 422', () => {
            return request(server)
            .post('/games')
            .send({
                title: 'Chess', 
            })
            .expect(422)
        })
    })
})