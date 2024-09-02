export type Categories = {
  name: string;
  id: string;
  subCategories: Categories | [];
}[];
