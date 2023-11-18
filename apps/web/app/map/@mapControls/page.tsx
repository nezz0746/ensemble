"use client";

import AppMapControls from "@/components/AppMapControls";
import { usePathname } from "next/navigation";

const AtMapControls = () => {
  const pathName = usePathname();
  return pathName.includes("/profile") ? <AppMapControls /> : null;
};

export default AtMapControls;
