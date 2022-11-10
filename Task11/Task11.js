const memorize = (func) => {
    const results = {};
    return (...args) => {
      if (!results[args]) {
        results[args] = func(...args);
      }
      return results[args];
    };
  };

  const square = memorize((num) => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        result++;
      }
    }
    return result;
  });
  
  console.time("First call");
  console.log(square(10000));
  console.timeEnd("First call");
  
  console.time("Second call");
  console.log(square(9999));
  console.timeEnd("Second call");
  
  console.time("Third call");
  console.log(square(10000));
  console.timeEnd("Third call");

  console.time("Fourth call");
  console.log(square(9999));
  console.timeEnd("Fourth call");