"use client";

import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useGetData } from "@/lib/fetch/axiosConfig/FetchData";
import { formatDate } from "@/components/shared/DateFormate/DateFormate";
import { SkeletonRow } from "@/components/shared/skelton/Skelton";
import UseTable, { TData } from "@/components/shared/table/UseTable";
import { TeamMember, TUserResponse } from "@/types/myTeam/myTeamType";
import Status from "@/components/shared/Status/Status";

const TreeRow = ({
  user,
  level,
  isExpanded,
  toggleExpand,
  hasChildren,
}: {
  user: TeamMember;
  level: number;
  isExpanded: boolean;
  toggleExpand: () => void;
  hasChildren: boolean;
}) => {
  return (
    <tr className={level % 2 === 0 ? "bg-gray-900" : "bg-gray-900"}>
      <TData className="py-3 px-4">
        <div
          className="flex items-center"
          style={{ paddingLeft: `${level * 20}px` }}
        >
          {user.name}
          {hasChildren ? (
            <button onClick={toggleExpand} className="ml-2">
              {isExpanded ? (
                <CiCircleMinus className="size-6" />
              ) : (
                <CiCirclePlus className="size-6" />
              )}
            </button>
          ) : (
            <span className="ml-8" />
          )}
        </div>
      </TData>
      <TData className="py-3 px-4">{user.email}</TData>
      <TData className="py-3 px-4">${user.investment}</TData>
      <TData className="py-3 px-4">
        {user.is_active === "0" ? (
          <Status title="In Active" />
        ) : (
          <Status title="Active" />
        )}
      </TData>
      <TData className="py-3 px-4">{formatDate(user.created_at)}</TData>
    </tr>
  );
};

const RecursiveTable = ({
  users,
  level = 0,
}: {
  users: TeamMember[];
  level?: number;
}) => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggle = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {users.map((user, index) => {
        const isOpen = expanded[index] || false;
        const hasChildren = user.team.length > 0;

        return (
          <React.Fragment key={index}>
            <TreeRow
              user={user}
              level={level}
              isExpanded={isOpen}
              toggleExpand={() => toggle(index)}
              hasChildren={hasChildren}
            />
            {isOpen && hasChildren && (
              <RecursiveTable users={user.team} level={level + 1} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
};

const headers = ["Username", "Email", "Investment", "Status", "Joined Date"];

export default function MyTeamComponents() {
  const { data: teamHistory, isLoading } = useGetData<TUserResponse>(
    ["team"],
    `/team`
  );
  const teamData = teamHistory?.team ?? [];

  return (
    <div className="bg-gray-900 rounded shadow pt-8">
      <div className="p-4 text-white text-[20px]">my team</div>

      <div className="p-4">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, i) => <SkeletonRow key={i} />)
        ) : (
          <>
            {teamData.length === 0 ? (
              <div className="text-center text-gray-500">
                No team members found.
              </div>
            ) : (
              <UseTable headers={headers} className="rounded-md">
                <RecursiveTable
                  users={teamData.map((member) => ({
                    ...member,
                    is_active: member.is_active === "0" ? "0" : "1",
                  }))}
                />
              </UseTable>
            )}
          </>
        )}
      </div>
    </div>
  );
}
