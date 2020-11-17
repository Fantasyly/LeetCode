/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let res = 0;
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    // 去遍历每个小孩子的胃口
    let last = -1;
    for (let i = 0; i < g.length; i++){
        for (let j = last + 1; j < s.length; j++) {
            if (s[j] >= g[i]) {
                last = j;
                res++;
                break;
            }
        }
    }
    return res;
};
// @lc code=end

