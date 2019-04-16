'use strict'


module.exports.login = (id, password) => (
    new Promise((resolve, reject) => {
        const member = [
            { 'id': 'test', 'password': '1234' },
            { 'id': 'test1', 'password': '1234' },
            { 'id': 'test2', 'password': '1234' },
            { 'id': 'test3', 'password': '1234' }];

        const filter = member.filter(data => data.id === id && data.password === password);

        if (filter.length) {
            resolve(filter[0]);
        } else {
            const err = new Error();
            err.message = 'Nonexistent account';
            err.status = 401;
            reject(err);
        }
    })
);