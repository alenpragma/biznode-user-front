"use client";

import { formatDate } from "@/components/shared/DateFormate/DateFormate";
import LoadingContainer from "@/components/shared/loading/LoadingComponents";
import Pagination from "@/components/shared/pagination/Pagination";
import Status from "@/components/shared/Status/Status";
import UseTable, { TData } from "@/components/shared/table/UseTable";
import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { cn } from "@/lib/utils";
import { TTransactionResponse } from "@/types/transactionsHistory/transactionHistory";


const WithdrawHistory = ({ pageNumber }: { pageNumber: string }) => {
  const headers = ["Date", "Remark", "Amount", "Status", "Details"];

  const { data: withdrawHistory, isPending } = useGetData<TTransactionResponse>(
    ["withdrawHistory", pageNumber],
    `/transactions?page=${pageNumber}&keyword=withdrawal`
  );


  return (
    <>
      <div className="py-5">
        <div className="pb-5 flex items-center gap-4">
          <h6 className="text-[20px] text-white">Withdraw History</h6>
        </div>

        {isPending ? (
          <LoadingContainer />
        ) : (
          <>
            {withdrawHistory?.total === 0 ? (
              <p className="text-center text-gray-400 italic">
                You {`don't`} have withdraw history.
              </p>
            ) : (
              <>
                <UseTable headers={headers} className="rounded-md">
                  {withdrawHistory?.data.map((item) => (
                    <tr key={item.id}>
                      <TData>{formatDate(item.created_at)}</TData>
                      <TData>
                        {item.remark === "interest"
                          ? "Block Reward"
                          : item.remark === "referral_commission"
                          ? "Generation Income"
                          : item.remark}
                      </TData>
                      <TData
                        className={cn(
                          "font-medium",
                          item.type === "+" ? "text-green-500" : "text-red-500"
                        )}
                      >
                        {`(${item.type})`} {item.amount} {item.currency}
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

                {withdrawHistory && withdrawHistory?.data.length >= 25 && (
                  <Pagination
                    total={withdrawHistory?.total || 0}
                    perPage={10}
                    route="/dashboard/transaction"
                    currentPage={
                      withdrawHistory?.current_page ? parseInt(pageNumber) : 1
                    }
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default WithdrawHistory;
