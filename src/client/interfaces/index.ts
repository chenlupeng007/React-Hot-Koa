export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  reviews: IReview[];
}

export interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
}

export interface IReview {
  comment: string;
  reviewer: string;
}
