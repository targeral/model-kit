export const api1 = (params: string) => {
  return new Promise(resolve => {
    console.info('start fetch api1');
    setTimeout(() => {
      console.info('api fetch finish', params);
      resolve({ color: 'red' });
    }, 500);
  });
};

export const api2 = (params: string) => {
  return new Promise(resolve => {
    console.info('start fetch api1');
    setTimeout(() => {
      console.info('api fetch finish', params);
      resolve({ color: 'blue' });
    }, 500);
  });
};
