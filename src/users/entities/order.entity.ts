import { Product } from './../../products/entities/product.entity';
import { User } from './user.entity';

export class Order {
  data: Date;
  user: User;
  products: Product[];
}
