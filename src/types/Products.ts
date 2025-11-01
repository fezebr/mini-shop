export type CategoryType = "whatch" | "phone"
export interface productsListType  {
     id: number;
     price: number;
     name: string;
     imgName: string;
     category: CategoryType
};