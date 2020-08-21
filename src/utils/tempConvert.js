export default (temp = null, scale = null, fixed = 1) => {
  if (!temp) return '-- --';

  switch (scale) {
    case 'C': return convertToCelcius(temp, fixed);
    case 'F': return convertToFhrenheit(temp, fixed);
    default: return temp;
  }
};

const convertToFhrenheit = (temp, fixed) => (((temp - 273.15) * 1.8) + 32)?.toFixed(fixed);

const convertToCelcius = (temp, fixed) => (temp - 273.15)?.toFixed(fixed);
