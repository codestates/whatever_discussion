const express = require('express');
const router = express.Router();
const {authController} = require('./../controllers');

router.get('/',authController.get)//로그인 여부조회
router.post('/signup', authController.signup.post);//회원가입
router.post('/signin', authController.signin.post);//로그인
router.post('/signout', authController.signout.post);//로그아웃
router.get('/idCheck/:userId',authController.idCheck.get)//아이디 중복체크
router.get('/nicknameCheck/:nickname',authController.nicknameCheck.get)//별명중복체크



module.exports= router