#include<iostream>
#include<vector>
#include <unordered_map>
using namespace std;
class Solution
{
public:
    // function to convert a number into its ceil form.

    int ceilTo(int x, int y)
    {
        if (x % y)
        {
            return (x / y) + 1;
        }

        return x / y;
    }

    int minimumRounds(vector<int> &tasks)
    {

        unordered_map<int, int> m;

        // inserting all the array elements into hashmap.
        for (auto x : tasks)
        {
            m[x]++;
        }

        int ans = 0; // variable to store total rounds required

        for (auto x : m)
        {
            if (x.second == 1)
                return -1;

            if (x.second > 3)
            {
                ans += ceilTo(x.second, 3);
            }
            else
            {
                ans += 1;
            }
        }
        // x.second means frequency

        return ans;
    }
};

int main(){
    Solution solution;
    vector<int> num = {2, 2,  3, 3, 3, 4, 4, 4, 4};
    int ans = solution.minimumRounds(num);
    cout << ans << "\n";
    return 0;
}