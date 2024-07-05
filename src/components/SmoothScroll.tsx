"use client";

import { getLocomotiveScroll } from "@/utilitys/getLocomotiveScroll";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      getLocomotiveScroll();
    })();
  }, []);
  return <>{children}</>;
}