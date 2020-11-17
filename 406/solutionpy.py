class Solution:
    def reconstructQueue(self, people):
        if not people:
            return []
        people.sort(key=lambda x: (-x[0], x[1]))
        res = []
        for item in people:
            res.insert(item[1], item)
        return res
