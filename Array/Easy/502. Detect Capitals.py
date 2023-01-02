class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        capitals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        count = 0
        for words in word:
            if words in capitals:
                count += 1
        if count == 0 or count == (len(word)):
            return True
        elif count == 1 and word[0] in capitals:
            return True
        else:
            return False
