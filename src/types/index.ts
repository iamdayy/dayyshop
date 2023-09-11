export interface Route {
  path: string;
  title: string;
  name: string;
}

export interface JumbotronData {
  title: string;
  image: string;
  text: string;
}

export interface Product {
  imageSrc: string;
  imageAlt: string;
  href: string;
  name: string;
  category: Category;
  id: number;
  color: string;
  price: string;
}

export interface Category {
  href: string;
  title: string;
}
export interface Author {
  imageUrl: string;
  href: string;
  name: string;
  role: string;
}
export interface Post {
  id: number;
  datetime: string;
  date: string;
  category: Category;
  href: string;
  title: string;
  description: string;
  author: Author;
}

export interface Cart extends Product {
  quantity: number;
}