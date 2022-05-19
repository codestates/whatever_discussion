require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = { 
    //accestoken 생성
    generateAccessToken: (data) => {
      console.log( sign(data, process.env.ACCESS_SECRET))
        return sign(data, process.env.ACCESS_SECRET)
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
        // console.log('@@@@@',)
        
      },
    //accestoken 검증
    isAuthorized:async (accessToken) => {
        try {
          const result = await verify(accessToken, process.env.ACCESS_SECRET)
          return result;
        } catch (err) {
          console.log(err)
          return null
        }
      },
};