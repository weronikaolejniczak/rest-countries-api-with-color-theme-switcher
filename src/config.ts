const API_BASE_URL = 'https://restcountries.com/v3.1/';

export const getEndpoint = (endpoint: string) => `${API_BASE_URL}/${endpoint}`;
