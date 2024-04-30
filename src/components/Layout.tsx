import React from "react";

type Props = {
  children?: React.ReactNode,
};

export default function Layout({ children }: Props) {
  return (
    <div className="content-container bg-white-bg dark:bg-black-bg text-black-text dark:text-white-text flex flex-col w-full pt-24 h-screen p-4 pb-4 overflow-auto">
      {children}
    </div>
  );
}
