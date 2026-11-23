import { api } from '../../service';

export const ordersService = {
  create: (order) => api.post('orders', order),
};
