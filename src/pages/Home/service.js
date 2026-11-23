import { api } from '../../service';

export const itemsService = {
  getAll: () => api.get('items'),
};
