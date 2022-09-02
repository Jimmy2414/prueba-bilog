export function formatfn(input) {
  const result = [];
  input.forEach(element => {
    const year = element.fecha.split('-')[0];
    const month = element.fecha.split('-')[1] - 1;
    const day = element.fecha.split('-')[2].split('T')[0];
    const hours = element.hora.split(':')[0];
    const minutes = element.hora.split(':')[1];
    const title = element.ape_nom || 'Disponible';
    const start = new Date(year, month, day, hours, minutes);

    const end = start.getTime() + 1800000;
    result.push({
      title: title,
      start: start,
      end: new Date(end),
    });
  });

  return result;
}
