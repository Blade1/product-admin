import { LangString } from '../langString';
import { Spec } from './spec';

export interface Product {
  id: string;
  name: LangString;
  description: LangString;
  price: number;
  thumbnail: string;
  images: string[];
  categories: string[];
  specs: Spec[];
}