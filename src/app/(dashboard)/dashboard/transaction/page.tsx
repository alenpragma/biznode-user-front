import TransactionHistory from "./TransactionComponents";

export interface Props {
  searchParams: Promise<{ page?: string }>;
}
const transactionHistoryPage = async ({ searchParams }: Props) => {
  const resolvedParams = await searchParams;
  const page = resolvedParams?.page ?? "1";

  return <TransactionHistory pageNumber={page} />;
};
export default transactionHistoryPage;
