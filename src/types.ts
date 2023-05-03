export interface ProductInterface {
  id: string;
  title: string;
  category: number;
  price: string;
  imageProduct: string;
  manufacturer: string;
  brand: string;
  description: string;
  size: string;
  types: string;
  barcode: string;
  quantity: number;
}


export interface ContextValue {
  handleCategorySelect: (category: number) => void;
  selectedCategory: number | null | undefined;
  sortType: number;
  handleSortChange: (sortType: number) => void;
}

export interface CartData {
  items: ProductInterface[];
  totalQuantity: number;
  totalPrice: number;
}

export interface CounterState {
  products: ProductInterface[];
  product: null | ProductInterface;
}
