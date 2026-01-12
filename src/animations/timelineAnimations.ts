export const timelineItem = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -60 : 60,
    scale: 0.98,
  }),
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
