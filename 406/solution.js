/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  if (people.length === 0) return [];
  const res = [];
  // 按照身高降序排序, 身高一样的按照其k值进行排序
  people.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  people.forEach(item => {
    // splice在指定位置插入元素
    // 三个参数分别为 起始位置  要删除的元素个数 要插入的元素
    res.splice(item[1], 0, item);
  });
  return res;
};
