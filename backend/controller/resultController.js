import Result from "../models/resultModel.js"

export async function createResult(req, res) {
    try {
        if (!req.user || !req.user.id) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized'
            })
        }
    }
    
    catch (error) {

    }
}