export type TReferrralUserData = {
    id: number;
    name: string;
    refer_by: string;
    email: string;
    is_active: string;
    created_at: string;
    investment: string;
  };
  
  export type TReferralType = {
    status: boolean;
    data: TReferrralUserData[];
    total: number;
    per_page: number;
    page: number;
    current_page: number;
    last_page: number;
    from: number;
  };
  