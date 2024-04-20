import Product from "../../models/Product"
import connectDb from "../../middleware/mongoose"

const handler = async(req, res) =>{
    if(req.method == 'GET'){
        try {
            let p = await Product.find()

            res.json(p)
        } catch (error) {
            res.json({error: "Inside catch, "})
        }
    }
    else{
        res.json({message: "This method is not allowed"})
    }
}

export default connectDb(handler)