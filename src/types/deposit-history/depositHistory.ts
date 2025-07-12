export interface Transaction {
    id: number;
    transaction_id: string;
    user_id: string;
    amount: string;
    status: string;
    created_at: string;
    updated_at: string;
  }
  
  export interface TransactionResponse {
    success: boolean;
    data: Transaction[];
    total: number;
    current: number;
    next: number | null;
    previous: number | null;
  }
  