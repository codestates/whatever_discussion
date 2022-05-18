const express = require('express');
const router = express.Router();
const {commentController} = require('./../controllers');

router.post('/:articleId', commentController.post);//게시물의 댓글 작성
router.patch('/:articleId/:commentId', commentController.patch);//게시물의 댓글 수정
router.delete('/:articleId/:commentId', commentController.delete);//게시물의 댓글 삭제
router.post('/like/:articleId/:commentId',commentController.like.post);//게시물의 댓글 좋아요
router.delete('/like/:articleId/:commentId',commentController.like.delete);//게시물의 댓글 좋아요 취소

module.exports= router