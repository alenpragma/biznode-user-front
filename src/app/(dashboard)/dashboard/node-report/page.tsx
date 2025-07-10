import HodeHisotoryComponents from "./NodeHistoryComponents";

export interface Props {
  searchParams: Promise<{ page?: string }>;
}
const NodeReportPage = async ({ searchParams }: Props) => {
  const resolvedParams = await searchParams;
  const page = resolvedParams?.page ?? "1";

  return <HodeHisotoryComponents pageNumber={page} />;
};
export default NodeReportPage;
