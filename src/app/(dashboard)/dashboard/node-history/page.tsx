"use client";

import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { TInvestmentResponse } from "@/types/nodeHisotory/nodeHistory";

const NodeHistoryPage = () => {
  // const headers = [
  //   "Date",
  //   "Node Name",
  //   "Investment",
  //   "Duration",
  //   "Daily Roi",
  //   "Status",
  // ];

  const { data: nodeHistory } = useGetData<TInvestmentResponse>(
    ["nodeHistory"],
    `/invest-history`
  );
  console.log(nodeHistory);
  return (
    <div>
      {/* <UseTable headers={headers} className="rounded-md">
        {nodeHistory?.data.map((item) => (
          <tr key={item.id}>
            <TData>{formatDate(item.created_at)}</TData>

            <TData>{item.package_name}</TData>
            <TData>${item.investment}</TData>
            <TData>{item.duration}</TData>
            <TData>{item.daily_roi}%</TData>
            <TData>
              {item.status === "0" ? (
                <Status title="In Active" />
              ) : (
                <Status title="Active" />
              )}
            </TData>
          </tr>
        ))}
      </UseTable> */}
    </div>
  );
};
export default NodeHistoryPage;
