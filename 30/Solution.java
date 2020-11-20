package Test30;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author Young
 * @create 2020-11-19 19:57
 */
public class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        if (s.length() == 0 || words.length == 0) return null;
        List<Integer> res = new ArrayList<>();
        Map<String, Integer> wordsMap = new HashMap<>();

        int oneWord = words[0].length();
        int allLen = oneWord * words.length;
        for (String w : words) {
            wordsMap.put(w, wordsMap.getOrDefault(w, 0) + 1);
        }

        for (int i = 1; i < oneWord; i++) {
            int left = i;
            int right = i;
            int curLeft = left;
            int count = 0;
            Map<String, Integer> window = new HashMap<>();
            while (right <= s.length()) {
                String w = s.substring(curLeft, right);
                count++;
                window.put(w, window.getOrDefault(w, 0) + 1);
                curLeft += oneWord;
                right += oneWord;

                if (window.get(w) > wordsMap.getOrDefault(w, 0)) {
                    count--;
                    String delS = s.substring(left, left + oneWord);
                    window.put(delS, window.get(delS) - 1);
                    left += oneWord;
                }

                if (count == allLen) res.add(left);
            }

        }
        return res;
    }
}
