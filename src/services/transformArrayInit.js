export const transformArrayInit = (arr) => 
  arr.map(x => ({ [x.name]: getBlank(x.type) }));
  
// XXX Update when new types added
const getBlank = (type) => {
  switch (type) {
    case 'input': return "";
    default: return null;
  }
};
