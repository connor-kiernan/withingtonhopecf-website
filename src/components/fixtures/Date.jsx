const Date = ({date, withTime=true}) => {
  let dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (withTime) {
    dateOptions = {
      ...dateOptions,
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }
  }
  return date.toLocaleString('en-GB', dateOptions).replace(/\d{1,2}/, function (match) {
    return addOrdinalSuffix(parseInt(match));
  });
}

export default Date;

function addOrdinalSuffix(day) {
  if (day > 3 && day < 21) return day + 'th';
  switch (day % 10) {
    case 1:  return day + 'st';
    case 2:  return day + 'nd';
    case 3:  return day + 'rd';
    default: return day + 'th';
  }
}