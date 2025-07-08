import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ReusableSkeletonProps {
  count?: number;
  height?: number | string;
  width?: number | string;
  className?: string;
}

const ReusableSkeleton: React.FC<ReusableSkeletonProps> = ({
  count = 1,
  height = "1rem",
  width = "100%",
  className = "",
}) => {
  return (
    <Skeleton
      count={count}
      height={height}
      width={width}
      baseColor="#dedede"
      highlightColor="#ffffff"
      className={className}
    />
  );
};

export default ReusableSkeleton;
