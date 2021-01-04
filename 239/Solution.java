package Test239;

import java.util.*;

/**
 * @author Young
 * @create 2020-11-21 14:59
 */
public class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        if (nums.length == 0 || k < 0) return new int[0];
        if (k == 1) return nums;

        ArrayDeque<Integer> deq = new ArrayDeque<>();
        int[] res = new int[nums.length - k + 1];

        for (int i = 0; i < nums.length; i++) {
            while (!deq.isEmpty() && nums[deq.peek()] < nums[i]) {
                deq.pollFirst();
            }

            deq.addLast(i);
            if (deq.peek() < i - k + 1) {
                deq.poll();
            }

            if (i + 1 >= k) {
                res[i - k + 1] = nums[deq.peek()];
            }

        }
        return res;
    }
}
