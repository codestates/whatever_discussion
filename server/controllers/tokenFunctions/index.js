require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
    //accestoken 생성
    generateAccessToken: (data) => {
        return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1d" })
        //토큰에들어갈데이터,비밀키,해쉬알고리즘                               
    },
    //accestoken 토큰 쿠키에담기
    sendAccessToken: (res, accessToken) => {
        const cookieOptions = {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          // secure: true,
          httpOnly: true
          // sameSite: 'none'
        };
        res.cookie('accessToken', accessToken, cookieOptions);
        return res.send({message: "You are successfully logged in.",accessToken:accessToken})
      },
    //accestoken 검증
    isAuthorized: (accessToken) => {
        try {
          return verify(accessToken, process.env.ACCESS_SECRET);
        } catch (err) {
          return null;
        }
      },
};