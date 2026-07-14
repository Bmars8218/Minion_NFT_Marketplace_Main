"use client";

import dynamic from "next/dynamic";
import SiderLoader from "@/components/layout/Sider/loading";

const Sider = dynamic(() => import("@/components/layout/Sider"), {
  ssr: false,
  loading: () => <SiderLoader />,
});

export default function ClientSider() {
  return <Sider />;
}
