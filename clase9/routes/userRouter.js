import {Router} from 'express';



const users = []
const userRouter = Router()


userRouter.get('/', (req, res)=>{
    res.status(200).json(users)
})

userRouter.post('/',(req,res)=>{
    const {name,body} = req.body;
    const user = {name,body} ;
    users.push(user)
    res.status(201).json(users)
})
export default userRouter