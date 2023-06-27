export type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
};

export type ServiceResponseSuccess<Type> = {
  status: 'SUCCESSFUL',
  data: Type
};

export type ServiceResponse<Type> = ServiceResponseSuccess<Type> | ServiceResponseError;