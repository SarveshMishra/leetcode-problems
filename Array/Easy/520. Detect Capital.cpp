#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    bool detectCapitalUse(string word)
    {
        vector<char> vec = {'A','B','C','D','E','F','G','H','I','J', 'K', 'L', 'M', 'N', 'O','P','Q','R','S','T', 'U', 'V', 'W', 'X','Y', 'Z' };
        int count = 0;
        for(int i = 0; i<word.size(); i++){
            for (int j = 0; j < vec.size(); j++)
            {
                if(word[i] == vec[j]){
                    ++count;
                }
            }
        }
        if(count == word.size() || count == 0){
            return true;
        }else if (count == 1 && isupper(word[0])){
            return true;
        }else{
            return false;
        }
    }
};

int main(){
    Solution solution;
    string word = "usa";
    cout << solution.detectCapitalUse(word) << "\n";
    return 0;
}
