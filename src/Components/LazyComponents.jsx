import { lazy } from "react";

// Lazy load components that are not immediately visible
export const LazyServicesTabs = lazy(() =>
  import("./ServicesTabs").then((module) => ({ default: module.ServicesTabs }))
);
export const LazyProjectCard = lazy(() => import("./ProjectCard"));
export const LazyForm = lazy(() =>
  import("./Form").then((module) => ({ default: module.Form }))
);
export const LazyPopover = lazy(() =>
  import("./popover").then((module) => ({ default: module.Popover }))
);

// Preload critical components on hover/interaction
export const preloadComponent = (importFn) => {
  const componentImport = importFn();
  return componentImport;
};

export default {
  LazyServicesTabs,
  LazyProjectCard,
  LazyForm,
  LazyPopover,
  preloadComponent,
};
