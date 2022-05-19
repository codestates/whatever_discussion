const { isAuthorized } = require('../tokenFunctions');

module.exports ={
    post: async (req, res) => {
        try {
            const { textContent } = req.body;
            if (!textContent) {
                return res.status(404).json({ data: textContent, message: "Text content was not found." });
            }
            return res.status(201).json({ message: "Comment was created." });
        } catch (err) {
            res.status(500).json({ message: "Server is out of order." });
        }
    },
    delete: async (req, res) => {
        try {
            const {accessToken}= req.cookie.accessToken;
            const userInfo = await isAuthorized(accessToken);
            if (!userInfo) {
                res.status(401).json({message: "Request for comment deletion was denied due to unauthorized request." });
            } 
            res.json({ message: "The comment was successfully deleted." });
        } catch (err) {
            res.status(500).json({ message: "Server is out of order." });
        }
    },
    patch: async (req, res) => {
        try {
            const { textContent } = req.body;
            if (!textContent) {
                return res.status(404).json({ message: "Text content was not found." });
            }
            return res.status(201).json({ data: textContent, message: "The comment was successfully modified." });
        } catch (err) {
            res.status(500).json({ message: "Server is out of order." });
        }
    }
}