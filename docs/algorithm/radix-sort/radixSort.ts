/**
 * 基数排序，改变原数组
 * @param arr 
 * @param isAsc 默认升序
 * @returns 
 */
export default function radixSort(arr: number[], isAsc = true) {
  if (arr.length < 2) return arr;

  let max = Math.max(...arr);
  const min = Math.abs(Math.min(...arr));
  if (max < 0 || min > max) {
    max = min;
  }
  const radix = 10;
  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    const buckets: number[][] = [];
    arr.forEach((item) => {
      let index = Math.floor(Math.abs(item) / exp) % radix;
      if (item < 0) {
        index += radix;
      }

      if (buckets[index]) {
        buckets[index].push(item);
      } else {
        buckets[index] = [item];
      }
    });

    arr = [];
    buckets.forEach((v, i) => {
      if (!v) return;

      if (isAsc) {
        if (i < 10) {
          arr.push(...v);
          return;
        }
        arr.unshift(...v);
        return;
      }

      if (i < 10) {
        arr.unshift(...v);
        return;
      }
      arr.push(...v);
    });

    exp *= radix;
  }

  return arr;
}
