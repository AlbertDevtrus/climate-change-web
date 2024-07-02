'use client';

export const getLocomotiveScroll = async () => {
  const Locomotive = (await import("locomotive-scroll")).default;
  const locomotiveScroll = new Locomotive();

  return locomotiveScroll;
}