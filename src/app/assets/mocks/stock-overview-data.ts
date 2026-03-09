import { StockOverviewItem } from '../../components/data-table/data-table';

export const stockOverviewRows: StockOverviewItem[] = [
  {
    product: 'Wireless Mouse',
    category: 'Electronics',
    inStock: 148,
    incoming: 48,
    outgoing: 22,
    trend: 'Up',
  },
  {
    product: 'Office Chair',
    category: 'Furniture',
    inStock: 64,
    incoming: 12,
    outgoing: 18,
    trend: 'Down',
  },
  {
    product: 'USB-C Hub',
    category: 'Accessories',
    inStock: 93,
    incoming: 35,
    outgoing: 16,
    trend: 'Up',
  },
  {
    product: 'Standing Desk',
    category: 'Furniture',
    inStock: 27,
    incoming: 6,
    outgoing: 11,
    trend: 'Stable',
  },
  {
    product: 'Mechanical Keyboard',
    category: 'Electronics',
    inStock: 58,
    incoming: 14,
    outgoing: 19,
    trend: 'Down',
  },
];
