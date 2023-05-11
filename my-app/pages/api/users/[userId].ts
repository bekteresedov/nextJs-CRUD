import { dbConnect } from "@/config/db";
import userModel, { User } from "@/models/userModel";
import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req:NextApiRequest, res:NextApiResponse) => {
    const method:string|undefined = req.method;
    const userId:string|string[]|undefined=req.query.userId;
    switch  (method) {
        case "GET":
          try {
            const user:User|null=await userModel.findById(userId);
       
          res.json({success:true,data:user});
          } catch (error) {
            res.status(200).json({success:false,message:error});
            
          }
          break;
          case "DELETE":
            try {
              const user:User|null=await userModel.findByIdAndDelete(userId);
              res.json({success:true,data:user});
              
            } catch (error) {
            res.status(200).json({success:false,message:error});
              
            }
            break;
            case "PATCH":
              try {
                const user:User|null=await userModel.findByIdAndUpdate(
                  {_id:userId},
                  {...req.body}
                );
                res.json({success:true,data:user});
                
              } catch (error) {
              res.status(200).json({success:false,message:error});
                
              }
            break;
    }
}

