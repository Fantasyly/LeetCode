/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  /**
   * 时间复杂度：O(3^m * 4^n)，
   * 其中 m 是输入中对应 3 个字母的数字个数
   * （包括数字 2、3、4、5、6、8），
   * n 是输入中对应 4 个字母的数字个数（包括数字 7、9），
   * m+n 是输入数字的总个数。
   * 当输入包含 m 个对应 3 个字母的数字和 n 个对应 4 个字母的数字时，
   * 不同的字母组合一共有 3^m * 4^n种，需要遍历每一种字母组合。
   * 空间复杂度：O(m+n)
   * m+n 是输入数字的总个数。
   * 除了返回值以外，
   * 空间复杂度主要取决于哈希表以及回溯过程中的递归调用层数，
   * 哈希表的大小与输入无关，可以看成常数，递归调用层数最大为 m+n
   */
  if (!digits) return [];

  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // directory保存待选的字母
  let directory = "";

  // start存储每个数组所对应的起点
  let starts = [];
  for (let i = 0; i < digits.length; i++) {
    starts.push(directory.length);
    directory += map[digits[i]];
  }
  starts.push(directory.length);

  let res = [];
  const dfs = (path, index) => {
    if (path.length === digits.length) {
      res.push(path);
      return;
    }

    let begin = starts[index],
      end = starts[index + 1];
    for (let i = begin; i < end; i++) {
      let temp = path;
      path += directory[i];
      dfs(path, index + 1);
      path = temp;
    }
  };

  dfs([], 0);
  return res;
};
