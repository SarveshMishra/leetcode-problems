#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
    int finalValueAfterOperations(vector<string> &operations)
    {
        int finalValue = 0;
        for (auto &it : operations)
        {
            // cout << it << ' ';
            if (it == "--X" || it == "X--")
            {
                finalValue = finalValue - 1;
            }
            else
            {
                finalValue = finalValue + 1;
            }
        }
        return finalValue;
    }
};

int main()
{
    Solution solution;
    vector<string> operations{"--X", "X++", "X++"};
    cout << solution.finalValueAfterOperations(operations) << endl; // Call the method
    return 0;
}
