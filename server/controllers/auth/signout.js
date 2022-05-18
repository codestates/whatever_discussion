
const { isAuthorized} = require('../tokenFunctions');
module.exports =  {
    post: async (req,res)=>{
        try {
            // // 로그인 인증 검사 필요한가?
            // const {accessToken}= req.cookie.accessToken
            // const userInfo = await isAuthorized(accessToken);
            // 쿠키 삭제
            res.cookie('accessToken', null, { maxAge: 0 });
            res.status(200).json({ message: "You are successfully logged out."});
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Server is out of order." });
        }
    }
};