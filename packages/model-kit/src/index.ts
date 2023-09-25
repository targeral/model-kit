const defineModelState = <
  T extends Record<string, any>,
  S extends Record<string, any>,
>(
  modelState: T,
  pureUIState: S,
) => {
  console.info(modelState);
  console.info(pureUIState);
  return () => ({
    ...modelState,
    ...pureUIState,
  });
};

export { defineModelState };
