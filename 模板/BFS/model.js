function bfs(root, k) {
  let queue = [];
  queue.push(root);

  // 记录层数
  let steps = 0;

  // 需要返回的节点
  let result = [];

  while (queue.length) {
    // 当前层的节点个数
    let size = queue.length;

    // 遍历当前层的所有节点
    while (size > 0) {
      // 获得当前节点
      const node = queue.shift();

      // 找到结果
      if (steps === k) {
        result.push(node);
      }

      // 左右孩子入队
      node.left && result.push(node.left);
      node.right && result.push(node.right);
      size--;
    }
    // 遍历完当前层的节点后, 层数加1
    steps++;
  }
  return result;
}

function bfs2(root) {
  let queue = [];
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();

    // 由于没有记录 steps，因此我们肯定是不需要根据层的信息去判断的。否则就用带层的模板了。
    if (node是我们要找到的) return node;

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return null;
}

// class Solution:
//     def bfs(k):
//         # 使用双端队列，而不是数组。因为数组从头部删除元素的时间复杂度为 N，双端队列的底层实现其实是链表。
//         queue = collections.deque([root])
//         # 队列不空，生命不止！
//         while queue:
//             node = queue.popleft()
//             # 由于没有记录 steps，因此我们肯定是不需要根据层的信息去判断的。否则就用带层的模板了。
//             if (node 是我们要找到的) return node
//             if node.right:
//                 queue.append(node.right)
//             if node.left:
//                 queue.append(node.left)
//         return -1
