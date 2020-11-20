package Test30;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Young
 * @create 2020-11-20 14:12
 */
public class Solution2 {
    public List<Integer> findSubstring(String s, String[] words) {
        if (s.length() == 0 || words.length == 0) return null;
        int slen = s.length(), wordsLen = words.length;
        int oneWord = words[0].length();
        List<Integer> res = new ArrayList<>();
        Map<String, Integer> map = new HashMap<>();
        for (String w : words) {
            map.put(w, map.getOrDefault(w, 0) + 1);
        }
        for (int i = 0; i < oneWord; i++) {
            int left = i;
            int curLeft = left;
            int right = curLeft + oneWord;
            int count = 0;
            Map<String, Integer> window = new HashMap<>();
            while (right <= slen) {
                String w = s.substring(curLeft, right);
                if (!map.containsKey(w)) {
                    left = right;
                    curLeft = left;
                    right += oneWord;
                    count = 0;
                    window.clear();
                } else {
                    window.put(w, window.getOrDefault(w, 0) + 1);
                    curLeft = right;
                    right += oneWord;
                    count++;

                    while (window.getOrDefault(w, 0) > map.getOrDefault(w, 0)) {
                        String lw = s.substring(left, left + oneWord);
                        window.put(lw, window.getOrDefault(lw, 0) - 1);
                        left += oneWord;
                        count--;
                    }
                    if (count == wordsLen) {
                        res.add(left);
                    }
                }
            }
        }
        return res;
    }
}
