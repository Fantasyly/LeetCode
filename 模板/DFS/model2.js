/**
 * 加法双递归
 */

function dfs_main(root) {
  return dfs_inner(root) + dfs_main(root.left) + dfs_main(root.right);
}

function dfs_inner(root) {
  // 在这里写判断逻辑 满足条件可能会得到一个value 这样的话是前序遍历
  return value + dfs_inner(root.left) + dfs_inner(root.right);
}

//如果是后序遍历的话 可以这样写
function dfs_inner(root) {
  let leftVal = dfs(root.left);
  let rightVal = dfs(root.right);

  if (当前节点满足要求) {
    value;
  }
  return value + leftVal + rightVal;
}
