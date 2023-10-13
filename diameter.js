function DiameterObject(objParams) {
  let objectChild1 = 0;
  let objectChild2 = 0;

  if (typeof objParams !== "object" || !objParams) {
    return 0;
  }

  for (const key in objParams) {
    const child = DiameterObject(objParams[key]);
    if (child > objectChild1) {
      objectChild1 = child;
    } else if (child > objectChild2) {
      objectChild2 = child;
    }
  }

  return objectChild1 + objectChild2 + 1;
}

const obj = {
  1: {
    2: null,
    3: {
      4: null,
      5: null,
    },
  },
};

const diameter = DiameterObject(obj);
console.log("result:", diameter);
