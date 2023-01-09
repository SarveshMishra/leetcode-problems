#include<vector>
#include<stack>
#include <string>
#include<iostream>
using namespace std;

struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
class Solution
{
public:
    vector<int> ans;
    vector<int> preorderTraversalRecursive(TreeNode *root)
    {
        if (root)
        {
            ans.push_back(root->val);
            preorderTraversalRecursive(root->left);
            preorderTraversalRecursive(root->right);
        }
        return ans;
    }
    vector<int> preorderTraversalIterative(TreeNode *root)
    {
        vector<int> ans;
        stack<TreeNode *> st;
        while (root || !st.empty())
        {
            if (root)
            {
                ans.push_back(root->val);
                if (root->right)
                {
                    st.push(root->right);
                }
                root = root->left;
            }
            else
            {
                root = st.top();
                st.pop();
            }
        }
        return ans;
    }
    vector<int> preorderTraversalMorris(TreeNode *root)
    {
        vector<int> nodes;
        while (root)
        {
            if (root->left)
            {
                TreeNode *pre = root->left;
                while (pre->right && pre->right != root)
                {
                    pre = pre->right;
                }
                if (!pre->right)
                {
                    pre->right = root;
                    nodes.push_back(root->val);
                    root = root->left;
                }
                else
                {
                    pre->right = NULL;
                    root = root->right;
                }
            }
            else
            {
                nodes.push_back(root->val);
                root = root->right;
            }
        }
        return nodes;
    }
};

int main(){
    Solution solution;
    TreeNode root(1);
    TreeNode left(2);
    TreeNode right(3);
    root.left = &left;
    root.right = &right;

    vector<int> ansRecursive;
    vector<int> ansIterative;
    vector<int> ansMorris;
    ansRecursive = solution.preorderTraversalRecursive(&root);
    for (int i = 0; i < ansRecursive; i++)
    {
        cout << ansRecursive << "\n";
    }
    return 0;
}
