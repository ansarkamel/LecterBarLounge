export type Language = 'EN' | 'RU' | 'KZ';
export type MenuSection = 'kitchen' | 'bar';

export interface TranslationSet {
  welcome: string;
  subtitle: string;
  promotions: string;
  kitchen: string;
  bar: string;
  viewCart: string;
  addToCart: string;
  cartEmpty: string;
  yourOrder: string;
  total: string;
  close: string;
  categories: {
    [key: string]: string;
  };
}

export interface Translations {
  EN: TranslationSet;
  RU: TranslationSet;
  KZ: TranslationSet;
}

export interface MenuItem {
  id: number;
  category: string;
  image: string;
  price: number;
  name: {
    EN: string;
    RU: string;
    KZ: string;
  };
  description: {
    EN: string;
    RU: string;
    KZ: string;
  };
}

export interface CartItem extends MenuItem {
  quantity: number;
}