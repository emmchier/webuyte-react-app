export const getData = (list) => {
  return new Promise((resolve, reject) => {
    if (list !== null) {
      setTimeout(() => {
        resolve(list);
      }, 2000);
    } else {
      reject("Ocurrió un error. Volvé a intentarlo.");
    }
  });
};
