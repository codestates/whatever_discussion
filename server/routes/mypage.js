const express = require('express');
const router = express.Router();
const {mypageController} = require('./../controllers');

router.delete('/', mypageController.delete);//회원탈퇴
router.patch('/', mypageController.patch);//프로필수정
router.get('/', mypageController.get)//내프로필조회
router.get('/articles', mypageController.articles.get);//내가쓴 게시물 조회
router.get('/votes',mypageController.votes.get);//투표에 참여한 게시물 조회

module.exports= router