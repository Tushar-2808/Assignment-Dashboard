export const calculateProgress = (submissions) => {
  const total = Object.keys(submissions).length;
  const submitted = Object.values(submissions).filter(Boolean).length;
  return (submitted / total) * 100;
};
