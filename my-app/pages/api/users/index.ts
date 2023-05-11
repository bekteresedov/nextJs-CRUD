import { dbConnect } from "@/config/db";
import userModel, { User } from "@/models/userModel";
import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req:NextApiRequest, res:NextApiResponse) => {
    const method:String|undefined = req.method;
    switch  (method) {
        case "GET":
            try {
                const users:User[]=await userModel.find({});
                res.status(200).json({ success:true,data:users }); 
            } catch (error) {
                res.status(400).json({ success:false,message:error }); 
            }
             break;
             case "POST":
                try {
                const user:User = await userModel.create(req.body);
                    res.status(200).json({ success:true,data:user }); 
                } catch (error) {
                    res.status(400).json({ success:false,message:error }); 
                }
                break;
    }
}