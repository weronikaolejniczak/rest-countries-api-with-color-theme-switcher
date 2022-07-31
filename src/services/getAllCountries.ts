import fetch from 'cross-fetch';
import { getEndpoint } from 'config';

export const getAllCountries = async () => {
  try {
    const response = await fetch(getEndpoint('all'));
    const data = await response.json();
    return data;
  } catch (error) {
    if (import.meta.env.DEV) console.error(error);
    throw error;
  }
};
