export type dataHeader = {
  id: number;
  name: string;
};
const BookHeader = [
  { id: 1, name: '#' },
  { id: 2, name: 'Id' },
  { id: 3, name: 'Title' },
  { id: 4, name: 'Author' },
  { id: 5, name: 'Year' },
  { id: 6, name: 'Description' },
  { id: 7, name: 'Thumbnail' },
  { id: 8, name: 'Action' },
];
const CategoryHeader = [
  { id: 1, name: '#' },
  { id: 2, name: 'Id' },
  { id: 3, name: 'Title' },
  { id: 4, name: 'Slug' },
  { id: 5, name: 'Description' },
  { id: 6, name: 'Thumbnail' },
  { id: 7, name: 'Action' },
];
const UserHeader = [
  { id: 1, name: 'Id' },
  { id: 2, name: 'Name' },
  { id: 7, name: 'Action' },
];
export { BookHeader, CategoryHeader, UserHeader };
