'use strict'

// - post

module.exports = ( req, res, next ) => {
    const { id, password } = req.body

    if ( id === 'test' && password == 'test123' ) {
        res.redirect('/member/signin/success')
    }
    else {
        res.redirect('/member/signin/failure')
    }
}

// - get

module.exports.success = (req, res, next) => {
    res.render('member/signin/success')
}

module.exports.failure = (req, res, next) => {
    res.render('member/signin/failure')
}