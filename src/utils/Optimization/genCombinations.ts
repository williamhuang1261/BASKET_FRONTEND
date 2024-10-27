const genCombinations = (maxNum: number, length: number): number[][] => {
  const results: number[][] = [];
  const current: number[] = [];

  if(length === 0 || maxNum === 0) return [];

  const backtrack = (start: number) => {
    if (current.length === length) {
      results.push([...current]);
      return;
    }

    for (let i = start; i <= maxNum; i++) {
      current.push(i);
      backtrack(i + 1);
      current.pop();
    }
  };

  backtrack(1);
  return results;
};

export default genCombinations;
