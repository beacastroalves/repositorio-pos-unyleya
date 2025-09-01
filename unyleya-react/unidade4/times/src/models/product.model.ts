export interface ProductResponse {
  description: string;
  name: string;
  price: number;
  urlImage: string;
  _id: string;
};

export interface ProductOverviewResponse extends ProductResponse {
  available: boolean;
  categoryId: string;
};