/**
 *
 * @param {二叉树根节点} root
 * @param {路径} path  其中 path 是树的路径， 如果需要就带上，不需要就不带
 */
function dfs1(root, path) {
  // 如果是空节点
  if (!root) return;

  // 如果是叶子节点
  if (!root.left && !root.right) return;

  // 根节点加入路径中
  path.push(root);

  // 逻辑可以写在这里  此时是前序遍历  (判断是否满足题目要求的地方)

  dfs1(root.left);
  dfs1(root.right);
  // 需要弹出，不然会错误计算。
  //     比如对于如下树：
  //
  //               5
  //              / \
  //             4   8
  //            /   / \
  //           11  13  4
  //          /  \    / \
  //         7    2  5   1
  //
  //    如果不 pop，那么 5 -> 4 -> 11 -> 2 这条路径会变成 5 -> 4 -> 11 -> 7 -> 2，其 7 被错误地添加到了 path

  path.pop();

  // 逻辑也可以写这里 此时是后序遍历

  return 你要返回的数据;
}
