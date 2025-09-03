export interface Code {
  id: number;
  code: string;
  status: string;
  user_id: number | null;
  code_owner: string;
  created_at: string;
  updated_at: string;
}

export interface CodesResponse {
  status: boolean;
  codes: Code[];
}
