"use client";

import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { SkeletonRow } from "@/components/shared/skelton/Skelton";
import UseTable, { TData } from "@/components/shared/table/UseTable";
import Status from "@/components/shared/Status/Status";
import { formatDate } from "@/components/shared/DateFormate/DateFormate";
import { TReferralType } from "@/types/my-referral/myReferralType";

const MyReferralComponents = () => {
  const headers = ["Joined At", "Username", "Email", "Invest", "Status"];

  const { data: referralHistory, isLoading } = useGetData<TReferralType>(
    ["referralHistory"],
    `/direct-refer`
  );
  return (
    <div className="p-5">
      <h6 className="text-[20px] my-3 text-white">My Referral</h6>
      {isLoading ? (
        Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)
      ) : (
        <UseTable headers={headers} className="rounded-md">
          {referralHistory?.data?.map((item) => (
            <tr key={item.id}>
              <TData>{formatDate(item.created_at)}</TData>

              <TData>{item.name}</TData>
              <TData>{item.email}</TData>
              <TData>${item.investment}</TData>
              <TData>
                {item.is_active === "0" ? (
                  <Status title="In Active" />
                ) : (
                  <Status title="Active" />
                )}
              </TData>
            </tr>
          ))}
        </UseTable>
      )}
    </div>
  );
};

export default MyReferralComponents;
