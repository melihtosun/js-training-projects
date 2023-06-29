function countingSort(arr) {
  // Write your code here
  const counts = Array(100).fill(0); // Assuming the range of values is 0 to 99
  console.log(counts)

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] += 1;
  }

  return counts;
}


countingSort([1, 1, 3, 2, 1])