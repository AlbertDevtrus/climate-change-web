"use client";

import { getLocomotiveScroll } from "@/utilitys/locomotiveScroll";
import React, { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export const SmoothScroll = ({ children }: Props) => {

  useEffect(() => {
    getLocomotiveScroll();
  }, []);

  return <div>{children}</div>;
};
