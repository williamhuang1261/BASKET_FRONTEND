import axios, {CanceledError} from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

interface Entity {
  id: number;
}

class HttpService{
  
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  
  get<T>() {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort()}
  }
  
  delete(id: number) {
    return apiClient.delete(this.endpoint + '/' + id)
  } 
  
  create<T>(entity: T) {
    return apiClient.post(this.endpoint, entity)
  }
  
  put<T extends Entity>(entity: T) {
    return apiClient.put(this.endpoint + '/' + entity.id, entity)
  }
  
}

export default apiClient
export {CanceledError};
export const create = (endpoint: string) => new HttpService(endpoint);