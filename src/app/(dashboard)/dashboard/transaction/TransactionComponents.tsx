"use client";

import { formatDate } from "@/components/shared/DateFormate/DateFormate";
import Pagination from "@/components/shared/pagination/Pagination";
import Status from "@/components/shared/Status/Status";
import UseTable, { TData } from "@/components/shared/table/UseTable";
import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { cn } from "@/lib/utils";
import { TTransactionResponse } from "@/types/transactionsHistory/transactionHistory";

const TransactionHistory = ({ pageNumber }: { pageNumber: string }) => {
  const headers = ["Date", "Remark", "Amount", "Status", "Details"];

  const { data: transactionHistory } = useGetData<TTransactionResponse>(
    ["transactionHistory", pageNumber],
    `/transactions?page=${pageNumber}`
  );
  return (
    <>
      {transactionHistory?.total === 0 ? (
        <p className="text-center text-gray-400">No transaction history</p>
      ) : (
        <div className="py-5">
          <h6 className="text-[20px] pb-5 text-white">Transaction Hitory</h6>
          <UseTable headers={headers} className="rounded-md">
            {transactionHistory?.data.map((item) => (
              <tr key={item.id}>
                <TData>{formatDate(item.created_at)}</TData>
                <TData>{item.remark}</TData>
                <TData
                  className={cn(
                    "font-medium",
                    item.type === "+" ? "text-green-500" : "text-red-500"
                  )}
                >
                  {`(${item.type})`}{" "}
                  {item.remark !== "referral_commission" ? "$" : "BIZT"}{" "}
                  {item.amount}
                </TData>
                <TData>
                  {item.status === "Completed" ? (
                    <Status title="Completed" />
                  ) : item.status === "Pending" ? (
                    <Status title="Pending" />
                  ) : item.status === "Paid" ? (
                    <Status title="Paid" />
                  ) : (
                    <Status title="Rejected" />
                  )}
                </TData>
                <TData>{item.details}</TData>
              </tr>
            ))}
          </UseTable>
          <Pagination
            total={transactionHistory?.total || 0}
            perPage={10}
            route="/dashboard/transaction"
            currentPage={
              transactionHistory?.current_page ? parseInt(pageNumber) : 1
            }
          />
        </div>
      )}
    </>
  );
};
export default TransactionHistory;
