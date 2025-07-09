export type TNode = {
  id: number;
  name: string;
  price: string;
  interest_rate: string;
  duration: string;
  return_type: string; // e.g. "daily"
  type: string;        // e.g. "master" or "mini"
  stock: string;
  total_sell: string;
  active: string;
  created_at: string | null;
  updated_at: string | null;
};

export type TNodeResponse = {
  data: {
    status: boolean;
    data: TNode[];
  }
};
