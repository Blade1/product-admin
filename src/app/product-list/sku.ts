import { LangString } from '../langString';
import { Spec } from './spec';

export interface Sku {
  id: string;
  count: number;
  specs: Spec[];
}