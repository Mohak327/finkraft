export function splitFullName(fullName) {
    if (fullName) {
      const names = fullName.split(' ');
      const firstName = names[0];
      const lastName = names.slice(1).join(' ');
      return { firstName, lastName };
    } else {
      return { firstName: "", lastName: "" };
    }
  }
  
  export function splitCompanies(string, separator) {
    if (string) {
      return string.split(separator).filter(Boolean);
    } else {
      return [];
    }
  }
  
  export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  export function makeIntegerArray(size) {
    return Array.from({ length: size }, (_, i) => i + 1); 
  }