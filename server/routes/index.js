const express = require('express');
const router = express.Router();
const auth = require('./auth.js');
const mypage =require('./mypage.js');
const article = require('./article.js')
const comment = require('./comment.js')

router.use('/auth',auth)
router.use('/mypage',mypage)
router.use('/article',article)
router.use('/comment',comment)

module.exports =router;
