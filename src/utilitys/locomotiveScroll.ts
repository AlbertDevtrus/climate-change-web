'use client';

export const getLocomotiveScroll = async () => {
  const Locomotive = (await import("locomotive-scroll")).default;
  const locomotiveScroll = new Locomotive({
    lenisOptions: {
      duration: 1.5
    }
  });

  return locomotiveScroll;
}