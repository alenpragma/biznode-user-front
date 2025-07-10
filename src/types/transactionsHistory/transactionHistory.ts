export type TTransaction = {
    id: number;
    transaction_id: string;
    user_id: string;
    amount: string;
    remark: string;
    type: string;
    status: string;
    details: string;
    created_at: string;
    updated_at: string;
  };
  
  export type TTransactionResponse = {
    status: boolean;
    data: TTransaction[];
    total: number;
    last_page: number;
    current_page: number;
    per_page: number;
    from: number;
  };
  