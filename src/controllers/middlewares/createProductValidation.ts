// import { NextFunction, Request, Response } from 'express';

// type ErrorResponse = {
//   message: string;
// };

// type ValidationResponse = void | Response<ErrorResponse>;

// const createProductValidation = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ): ValidationResponse => {
//   const { name, price, orderId } = req.body;

//   if (!name) return res.status(404).json({ message: '"name" is required' });
//   if (!price) return res.status(404).json({ message: '"price" is required' });
//   if (!orderId) return res.status(400).json({ message: '"orderId" is required' });

//   next();
// };

// export default {
//   createProductValidation,
// };
