const { users } = require('../../models');
const {isAuthorized} =require('./../tokenFunctions')

module.exports ={
    get :async (req,res)=>{
        const { accessToken } = req.cookies;
        //토큰이없는경우
        if (!accessToken) {
            return res.status(401).json({ message: 'Access token not provided!' });
          }
        //토큰이있는경우 유효한 토큰인지 검사
        const decoded = isAuthorized(accessToken);
        if (!decoded) {
          return res.status(401).json({ message: 'Invalid access token!' });
        }
        
        //디코드된 정보를 통해 유저정보조회후 
        const { userId } = decoded;
        const userInfo = await users.findOne({ where: { userId } });
        return res.json({userInfo})
    },
    signin: require('./signin'),
    signout: require('./signout'),
    signup: require('./signup'),
    idCheck: require('./idCheck'),
    nicknameCheck:require('./nicknameCheck')
}