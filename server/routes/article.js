const express = require('express');
const router = express.Router();
const {articleController} = require('./../controllers');


router.post('/', articleController.post);//게시글 작성
router.patch('/:articleId', articleController.patch);//게시물 수정
router.delete('/:articleId', articleController.delete);//게시물 삭제
router.post('/votAgree/:articleId',articleController.voteAgree.post)//게시물 찬성투표
router.post('/votDisagree/:articleId',articleController.voteDisagree.post)//게시물 반대투표

module.exports= router