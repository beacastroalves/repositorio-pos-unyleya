// import axios from 'axios';
import { Mock } from './mock';

// const api = axios.create({
//   baseURL: 'https://api-products-dh-next.vercel.app/',
// });

interface RequestOptions {
  headers?: {
    'Authorization': string;
  }
}

const api = {
  get: async <T>(url: string, options: RequestOptions = {}) => {
    let data: T = {} as T;
    if (!options.headers?.Authorization) {
      throw Error('Token Required');
    }
    const date = new Date(+options.headers?.Authorization);
    if (!date.getTime() || date.getTime() < new Date().getTime()) {
      throw Error('Token Invalid or Expired');
    }


    if (url.startsWith('/teams')) {
      data = Mock.getTeams() as T;
    } else if (url.startsWith('/products/')) {
      data = Mock.getProducts() as T;
    } else if (url.startsWith('/product/')) {
      data = Mock.getProduct() as T;
    }
    return { data };
  },

  post: async <T>(url: string, body: unknown) => {
    let data: T = {} as T;
    if (url.startsWith('/auth')) {
      const b = body as { email: string, password: string };
      if (
        b.email === 'teste@teste.com' &&
        b.password === '123456'
      ) {
        data = Mock.postAuthSuccess() as T;
      } else {
        throw new Error();
      }
    }

    return { data };
  }
};



export default api;