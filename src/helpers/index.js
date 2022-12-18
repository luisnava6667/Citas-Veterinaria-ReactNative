export const formatDate = dat => {
  const newDate = new Date(dat);
  const option = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return newDate.toLocaleDateString('es-ES', option);
};
