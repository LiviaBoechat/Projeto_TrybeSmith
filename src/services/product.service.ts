import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
// import { Product } from '../../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

type DBProductReponse = {
  id: number;
  name: string
  price: string;
};

async function create(product: ProductInputtableTypes): Promise<ServiceResponse<DBProductReponse>> {
  const newProduct = await ProductModel.create(product);
  const { orderId, ...productData } = newProduct.dataValues;
  
  const serviceResponse: ServiceResponse<DBProductReponse> = {
    status: 'SUCCESSFUL', 
    data: productData, 
  };

  return serviceResponse;
}

export default {
  create,
};