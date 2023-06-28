// import { NextFunction, Request, Response } from 'express';
// import jwtUtil from '../../utils/jwt.util';
// import UserModel from '../../database/models/user.model';

// /* Função para extrair o token */
// function extractToken(authorization: string): string {
//   // o bearer é posicção [0] e o token [1]
//   return authorization.split(' ')[1];
// }

// async function loginValidation(req: Request, res: Response, next: NextFunction)
//   : Promise<Response | void> {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({ message: 'Token é obrigatório' });
//   }

//   const token = extractToken(authorization);

//   try {
//     const decoded = await jwtUtil.verify(token);
//     const user = await UserModel.findOne({ where: { username: decoded.username } });
//     if (!user) return res.status(401).json({ message: 'Token inválido' }); 
    
//     next();
//   } catch (e) {
//     return res.status(401).json({ message: 'Token inválido' });
//   }
// }

// export default loginValidation;