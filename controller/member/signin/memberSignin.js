'use strict'

// - post

const MEMBER = [
    {
        'id': 'test',
        'password': '1234'
    },
    {
        'id': 'test1',
        'password': '1234'
    },
    {
        'id': 'test2',
        'password': '1234'
    },
    {
        'id': 'test3',
        'password': '1234'
    },
]

module.exports = ( req, res, next ) => {
    const { id, password } = req.body

    const is_member = MEMBER.filter(data => data.id === id && data.password === password)
    console.log(is_member)
    if ( is_member.length ) {
        res.send(JSON.stringify({ status: 200, member: { id: id }, response: 'Ok' }))
    }
    else {
        res.send(JSON.stringify({ status: 401, response: 'Unauthorized' }))
    }
}