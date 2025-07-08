
export type LoginResponse = {
  data: {
    data?: {
      token: string;
    }
    success: boolean;
    message?: string | undefined;
  };
  status: number;
  success: boolean;
};
