import { api } from '../service';

export const settingsService = {
  get: () => api.get('settings'),
};
