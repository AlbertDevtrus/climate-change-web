export const getLocomotiveScroll = async () => {
  const LocomotiveScroll = (await import("locomotive-scroll")).default;
  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
      duration: 1.5
    }
  });

  return locomotiveScroll;
}