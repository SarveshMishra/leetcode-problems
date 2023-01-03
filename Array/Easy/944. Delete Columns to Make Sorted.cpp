#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    int minDeletionSize(vector<string> &strs)
    {
        for (int i = 0; i<strs.size(); i++)
        {
            cout << strs[i] << "\n";
        }
        return 0;
    }
};

int main (){
    Solution solution;
    vector<string> strings = {"adb","cae", "dcg"};
    cout << solution.minDeletionSize(strings);
    return 0;
}