import ProductModel, { 
  ProductInputtableTypes, 
  ProductSequelizeModel } from '../database/models/product.model';
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
  
  const theServiceResponse: ServiceResponse<DBProductReponse> = {
    status: 'SUCCESSFUL', 
    data: productData, 
  };

  return theServiceResponse;
}

async function findAll(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const productList = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: productList };
}

export default {
  create,
  findAll,
};