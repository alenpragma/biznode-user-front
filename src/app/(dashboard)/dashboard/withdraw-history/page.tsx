import React from "react";
import WithdrawHistory from "./WithdrawHistoryPage";

export interface Props {
  searchParams: Promise<{ page?: string }>;
}
export default async function WithdrawHistoryPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const page = resolvedParams?.page ?? "1";
  return <WithdrawHistory pageNumber={page} />;
}
