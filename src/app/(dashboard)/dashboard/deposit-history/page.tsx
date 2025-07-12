import DepossitHistory from "./DepositHistory";

export interface Props {
  searchParams: Promise<{ page?: string }>;
}
const transactionHistoryPage = async ({ searchParams }: Props) => {
  const resolvedParams = await searchParams;
  const page = resolvedParams?.page ?? "1";

  return <DepossitHistory pageNumber={page} />;
};
export default transactionHistoryPage;
