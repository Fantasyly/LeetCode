/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) return [];

  let res = [],
    len = s.length;
  /**
   *
   * @param {Array} path 路径数组
   * @param {Number} index 开始截取子串的索引
   * @param {Number} splitItems 截取的段的个数
   */
  const dfs = (path, index, splitItems) => {
    /**
     * 如果path的长度为4的话
     * 说明找到了一个
     * 直接加入结果数组
     */
    if (path.length === 4) {
      let ip = path.join(".");
      if (ip.length === len + 3) {
        console.log("ip为" + ip);
        res.push(ip);
      }
      return;
    }

    /**
     * 剪枝条件1: 如果剩下的字符不够还需要的段数
     *  比如说还有2个字符，但是我们还差3段，每一段至少都有一个字符
     *  此时直接return 剪枝
     * 剪枝条件2: 如果剩下每个段都选3个，但字符仍还有剩余的话，剪枝
     *  比如说还有7个字符，我们还有2段没选，
     *  此时剩下的2段都选3个仍然会剩下字符，直接return，不满足条件
     */
    if (len - index < 4 - splitItems || len - index > 3 * (4 - splitItems)) {
      return;
    }
    let count = 1,
      i = index;
    while (count <= 3 && i + count <= len) {
      let sub = s.substr(i, count);
      let numSub = sub * 1; // 前导0会消失
      if ((numSub + "").length === sub.length && sub >= 0 && sub <= 255) {
        path.push(sub);
        console.log(`此时的count为${count},此时的path为${path}`);

        dfs(path, i + count);
        path.pop();
      }
      count++;
    }
  };
  dfs([], 0);
  return res;
};
