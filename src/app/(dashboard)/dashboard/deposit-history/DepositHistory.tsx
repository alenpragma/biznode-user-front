"use client";

import { formatDate } from "@/components/shared/DateFormate/DateFormate";
import Pagination from "@/components/shared/pagination/Pagination";
import Status from "@/components/shared/Status/Status";
import UseTable, { TData } from "@/components/shared/table/UseTable";
import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { TransactionResponse } from "@/types/deposit-history/depositHistory";

const DepossitHistory = ({ pageNumber }: { pageNumber: string }) => {
  const headers = ["Date", "Transaction Id", "Amount", "Status"];

  const { data: depositHistory } = useGetData<TransactionResponse>(
    ["depositHistory", pageNumber],
    `/deposit-history?page=${pageNumber}`
  );
  return (
    <>
      {depositHistory?.total === 0 ? (
        <p className="text-center text-gray-400">No deposit history</p>
      ) : (
        <div className="py-5">
          <h6 className="text-[20px] pb-5 text-white">Deposit Hitory</h6>
          <UseTable headers={headers} className="rounded-md">
            {depositHistory?.data.map((item) => (
              <tr key={item.id}>
                <TData>{formatDate(item.created_at)}</TData>

                <TData>{item.transaction_id}</TData>
                <TData>${item.amount}</TData>
                <TData>
                  {item.status === "0" ? (
                    <Status title="Completed" />
                  ) : (
                    <Status title="Rejected" />
                  )}
                </TData>
              </tr>
            ))}
          </UseTable>
          <Pagination
            total={depositHistory?.total || 0}
            perPage={10}
            route="/dashboard/transaction"
            currentPage={depositHistory?.current ? parseInt(pageNumber) : 1}
          />
        </div>
      )}
    </>
  );
};
export default DepossitHistory;
