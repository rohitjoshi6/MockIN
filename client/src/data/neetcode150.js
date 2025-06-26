const neetcode150 = [
  {
    "id": 1,
    "title": "Two Sum #1",
    "topic": "array",
    "difficulty": "easy",
    "description": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input has exactly one solution, and you may not use the same element twice.",
    "sampleInput": "nums = [2,7,11,15], target = 9",
    "sampleOutput": "[0,1] (because nums[0] + nums[1] == 9)"
  },
  {
    "id": 2,
    "title": "Two Sum #2",
    "topic": "array",
    "difficulty": "medium",
    "description": "Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number. Return the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.",
    "sampleInput": "numbers = [2,3,4], target = 6",
    "sampleOutput": "[1,3] (because numbers[1] + numbers[3] == 6. Indices are 1-based)"
  },
  {
    "id": 3,
    "title": "Two Sum #3",
    "topic": "array",
    "difficulty": "medium",
    "description": "Design a data structure that accepts a stream of integers and checks if there are any two integers in the stream whose sum equals to a given `value`. Implement the `TwoSum` class.",
    "sampleInput": "TwoSum twoSum = new TwoSum(); twoSum.add(1); twoSum.add(3); twoSum.add(5); twoSum.find(4); twoSum.find(7);",
    "sampleOutput": "true, false"
  },
  {
    "id": 4,
    "title": "Two Sum #4",
    "topic": "array",
    "difficulty": "hard",
    "description": "Given the `root` of a Binary Search Tree and an integer `k`, return `true` if there exist two elements in the BST such that their sum is equal to `k`, or `false` otherwise.",
    "sampleInput": "root = [5,3,6,2,4,null,7], k = 9",
    "sampleOutput": "true (5 + 4 = 9)"
  },
  {
    "id": 5,
    "title": "Two Sum #5",
    "topic": "array",
    "difficulty": "hard",
    "description": "Given an array `nums` of `n` integers, are there elements `a`, `b`, `c`, and `d` in `nums` such that `a + b + c + d = target`? Find all unique quadruplets in the array which gives the sum of `target`.",
    "sampleInput": "nums = [1,0,-1,0,-2,2], target = 0",
    "sampleOutput": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]"
  },
  {
    "id": 6,
    "title": "Best Time to Buy and Sell Stock #1",
    "topic": "array",
    "difficulty": "easy",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
    "sampleInput": "prices = [7,1,5,3,6,4]",
    "sampleOutput": "5 (Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.)"
  },
  {
    "id": 7,
    "title": "Best Time to Buy and Sell Stock #2",
    "topic": "array",
    "difficulty": "medium",
    "description": "You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i`th day. On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day. Find the maximum profit you can achieve.",
    "sampleInput": "prices = [7,1,5,3,6,4]",
    "sampleOutput": "7 (Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 4. Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 3. Total profit = 4 + 3 = 7.)"
  },
  {
    "id": 8,
    "title": "Best Time to Buy and Sell Stock #3",
    "topic": "array",
    "difficulty": "medium",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day. Design an algorithm to find the maximum profit. You may complete at most two transactions.",
    "sampleInput": "prices = [3,3,5,0,0,3,1,4]",
    "sampleOutput": "6 (Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3. Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 3. Total profit = 3 + 3 = 6.)"
  },
  {
    "id": 9,
    "title": "Best Time to Buy and Sell Stock #4",
    "topic": "array",
    "difficulty": "hard",
    "description": "You are given an integer array `prices` and an integer `k`. You want to maximize your profit by performing at most `k` transactions. You may not engage in multiple transactions simultaneously.",
    "sampleInput": "k = 2, prices = [2,4,1]",
    "sampleOutput": "2 (Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 2.)"
  },
  {
    "id": 10,
    "title": "Best Time to Buy and Sell Stock #5",
    "topic": "array",
    "difficulty": "hard",
    "description": "You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day, and an integer `fee` representing a transaction fee. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction. You may not buy multiple times, you must sell before buying again. Find the maximum profit.",
    "sampleInput": "prices = [1,3,2,8,4,9], fee = 2",
    "sampleOutput": "8 (Buy at prices[0] = 1, sell at prices[3] = 8, profit = 8 - 1 - 2 = 5. Buy at prices[4] = 4, sell at prices[5] = 9, profit = 9 - 4 - 2 = 3. Total profit = 5 + 3 = 8.)"
  },
  {
    "id": 11,
    "title": "Contains Duplicate #1",
    "topic": "array",
    "difficulty": "easy",
    "description": "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
    "sampleInput": "nums = [1,2,3,1]",
    "sampleOutput": "true"
  },
  {
    "id": 12,
    "title": "Contains Duplicate #2",
    "topic": "array",
    "difficulty": "medium",
    "description": "Given an integer array `nums` and an integer `k`, return `true` if there are two distinct indices `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.",
    "sampleInput": "nums = [1,2,3,1], k = 3",
    "sampleOutput": "true"
  },
  {
    "id": 13,
    "title": "Contains Duplicate #3",
    "topic": "array",
    "difficulty": "medium",
    "description": "Given an integer array `nums`, return `true` if there are two distinct indices `i` and `j` in the array such that `abs(nums[i] - nums[j]) <= t` and `abs(i - j) <= k`.",
    "sampleInput": "nums = [1,5,9,1,5,9], k = 2, t = 3",
    "sampleOutput": "false"
  },
  {
    "id": 14,
    "title": "Contains Duplicate #4",
    "topic": "array",
    "difficulty": "hard",
    "description": "This is a theoretical problem. Given an array `nums` and a range `[L, R]`, determine if there exist two elements `nums[i]` and `nums[j]` such that `nums[i] == nums[j]` and `L <= i - j <= R`. (Focus on optimization for large ranges).",
    "sampleInput": "nums = [1,2,3,1], L = 1, R = 2",
    "sampleOutput": "true"
  },
  {
    "id": 15,
    "title": "Contains Duplicate #5",
    "topic": "array",
    "difficulty": "hard",
    "description": "Given an array `nums` of integers, return `true` if the array contains duplicate elements such that for any two duplicate elements `nums[i]` and `nums[j]`, the distance `abs(i - j)` is strictly less than `minDistance`, or `false` otherwise. (Focus on advanced data structures and optimal time complexity).",
    "sampleInput": "nums = [1,0,1,1], minDistance = 1",
    "sampleOutput": "true"
  },
  {
    "id": 16,
    "title": "Valid Parentheses #1",
    "topic": "stack",
    "difficulty": "easy",
    "description": "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
    "sampleInput": "s = \"()[]{}\"",
    "sampleOutput": "true"
  },
  {
    "id": 17,
    "title": "Valid Parentheses #2",
    "topic": "stack",
    "difficulty": "medium",
    "description": "Given a string `s` containing only three types of characters: '(', ')', and '*', return `true` if `s` is a valid string. The '*' could be treated as a single right parenthesis ')', a single left parenthesis '(', or an empty string.",
    "sampleInput": "s = \"(*)\"",
    "sampleOutput": "true"
  },
  {
    "id": 18,
    "title": "Valid Parentheses #3",
    "topic": "stack",
    "difficulty": "medium",
    "description": "Given a string `s` of '(' , ')' and lowercase English characters. Your task is to remove the minimum number of parentheses ('(' or ')') so that the resulting parentheses string is valid. Return any valid string. If multiple solutions exist, return any of them.",
    "sampleInput": "s = \"lee(t(c)o)de)\"",
    "sampleOutput": "\"lee(t(c)o)de\""
  },
  {
    "id": 19,
    "title": "Valid Parentheses #4",
    "topic": "stack",
    "difficulty": "hard",
    "description": "Given `n` pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    "sampleInput": "n = 3",
    "sampleOutput": "[\"((()))\",\"(()())\",\"(()())\",\"()(())\",\"()()()\"]"
  },
  {
    "id": 20,
    "title": "Valid Parentheses #5",
    "topic": "stack",
    "difficulty": "hard",
    "description": "Given an `expression` string, check whether it has valid parentheses. Also, consider additional rules like: '[]' cannot be inside '()', '{}' cannot be inside '[]', etc. (This implies a stricter nesting rule than just type matching).",
    "sampleInput": "expression = \"([{}]())()\"",
    "sampleOutput": "true"
  },
  {
    "id": 21,
    "title": "Min Stack #1",
    "topic": "stack",
    "difficulty": "easy",
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement the `MinStack` class.",
    "sampleInput": "MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3); minStack.getMin(); minStack.pop(); minStack.top(); minStack.getMin();",
    "sampleOutput": "-3, 0, -2"
  },
  {
    "id": 22,
    "title": "Min Stack #2",
    "topic": "stack",
    "difficulty": "medium",
    "description": "Extend the `MinStack` class to also support `getMax()` in constant time. The stack should support push, pop, top, `getMin`, and `getMax` operations, all in O(1) time.",
    "sampleInput": "MinMaxStack stack = new MinMaxStack(); stack.push(5); stack.push(2); stack.push(8); stack.getMin(); stack.getMax();",
    "sampleOutput": "2, 8"
  },
  {
    "id": 23,
    "title": "Min Stack #3",
    "topic": "stack",
    "difficulty": "medium",
    "description": "Implement a stack that stores integers. In addition to standard stack operations (push, pop, top), it should support `peekMin()` which returns the minimum element without removing it, and `peekMax()` which returns the maximum element without removing it, both in O(1).",
    "sampleInput": "CustomStack stack = new CustomStack(); stack.push(10); stack.push(5); stack.push(20); stack.peekMin(); stack.peekMax();",
    "sampleOutput": "5, 20"
  },
  {
    "id": 24,
    "title": "Min Stack #4",
    "topic": "stack",
    "difficulty": "hard",
    "description": "Implement a stack such that `push`, `pop`, `top`, and `getMin` all run in O(1) average time, but `getMin` must be O(1) worst-case. The space complexity should be O(N) where N is the number of elements in the stack.",
    "sampleInput": "MinStackV2 stack = new MinStackV2(); stack.push(1); stack.push(-1); stack.getMin(); stack.pop(); stack.getMin();",
    "sampleOutput": "-1, 1"
  },
  {
    "id": 25,
    "title": "Min Stack #5",
    "topic": "stack",
    "difficulty": "hard",
    "description": "Implement a stack with an additional `median()` operation, which returns the median of all elements currently in the stack. All operations (push, pop, top, getMin, getMax, median) should run in O(1) time.",
    "sampleInput": "MedianStack stack = new MedianStack(); stack.push(1); stack.push(2); stack.median(); stack.push(3); stack.median();",
    "sampleOutput": "1, 2" // Assuming median for [1,2] is 1, and for [1,2,3] is 2.
  },
  {
    "id": 26,
    "title": "Evaluate Reverse Polish Notation #1",
    "topic": "stack",
    "difficulty": "easy",
    "description": "Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are `+`, `-`, `*`, `/`. Each operand may be an integer or another expression. Division between two integers should truncate toward zero.",
    "sampleInput": "tokens = [\"2\",\"1\",\"+\",\"3\",\"*\"]",
    "sampleOutput": "9 (Explanation: ((2 + 1) * 3) = 9)"
  },
  {
    "id": 27,
    "title": "Evaluate Reverse Polish Notation #2",
    "topic": "stack",
    "difficulty": "medium",
    "description": "Extend the RPN evaluator to include a `peek` operator which returns the top element of the stack without removing it, and a `dup` operator which duplicates the top element of the stack. All operators are still integers or expressions.",
    "sampleInput": "tokens = [\"4\",\"1\",\"+\",\"dup\",\"*\",\"peek\"]",
    "sampleOutput": "25 (Explanation: (4+1=5), dup (5,5), mul (25), peek (25) -> final result is 25)"
  },
  {
    "id": 28,
    "title": "Evaluate Reverse Polish Notation #3",
    "topic": "stack",
    "difficulty": "medium",
    "description": "Evaluate an RPN expression where operands can be floating-point numbers. Division results should retain floating-point precision.",
    "sampleInput": "tokens = [\"4.0\",\"2.0\",\"/\"]",
    "sampleOutput": "2.0"
  },
  {
    "id": 29,
    "title": "Evaluate Reverse Polish Notation #4",
    "topic": "stack",
    "difficulty": "hard",
    "description": "Evaluate an RPN expression with support for custom functions that take a fixed number of arguments. Functions are represented by their names, followed by their arguments. Example functions: `NEG` (negates top), `SQRT` (square root of top).",
    "sampleInput": "tokens = [\"4\", \"SQRT\", \"NEG\"]",
    "sampleOutput": "-2 (Explanation: sqrt(4)=2, neg(2)=-2)"
  },
  {
    "id": 30,
    "title": "Evaluate Reverse Polish Notation #5",
    "topic": "stack",
    "difficulty": "hard",
    "description": "Evaluate an RPN expression where expressions can be nested. An outer expression may contain a sub-expression as an operand. (This implies parsing sub-expressions, possibly with their own RPN structure, or a more complex AST interpretation).",
    "sampleInput": "tokens = ['2', '[3,4,+,*', '5', '+'] (Conceptual input for nesting)",
    "sampleOutput": "27 (Conceptual: 2 + ((3+4)*5) = 2 + 35 = 37. This input format is hypothetical.)"
  },
  {
    "id": 31,
    "title": "Reverse Linked List #1",
    "topic": "linkedlist",
    "difficulty": "easy",
    "description": "Given the `head` of a singly linked list, reverse the list, and return the reversed list.",
    "sampleInput": "head = [1,2,3,4,5]",
    "sampleOutput": "[5,4,3,2,1]"
  },
  {
    "id": 32,
    "title": "Reverse Linked List #2",
    "topic": "linkedlist",
    "difficulty": "medium",
    "description": "Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`, reverse the nodes of the list from position `left` to `right`, and return the reversed list.",
    "sampleInput": "head = [1,2,3,4,5], left = 2, right = 4",
    "sampleOutput": "[1,4,3,2,5]"
  },
  {
    "id": 33,
    "title": "Reverse Linked List #3",
    "topic": "linkedlist",
    "difficulty": "medium",
    "description": "Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return its modified list. `k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes in the end should remain as they are.",
    "sampleInput": "head = [1,2,3,4,5], k = 2",
    "sampleOutput": "[2,1,4,3,5]"
  },
  {
    "id": 34,
    "title": "Reverse Linked List #4",
    "topic": "linkedlist",
    "difficulty": "hard",
    "description": "Given the `head` of a linked list, swap every two adjacent nodes and return its `head`. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed).",
    "sampleInput": "head = [1,2,3,4]",
    "sampleOutput": "[2,1,4,3]"
  },
  {
    "id": 35,
    "title": "Reverse Linked List #5",
    "topic": "linkedlist",
    "difficulty": "hard",
    "description": "Given a `head` of a linked list, and an integer `p`, reverse every `p` groups of nodes. If any group does not have `p` nodes, the remaining nodes should be reversed as well, unlike the `reverse-nodes-in-k-group` problem.",
    "sampleInput": "head = [1,2,3,4,5], p = 3",
    "sampleOutput": "[3,2,1,5,4]"
  },
  {
    "id": 36,
    "title": "Merge Two Sorted Lists #1",
    "topic": "linkedlist",
    "difficulty": "easy",
    "description": "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
    "sampleInput": "list1 = [1,2,4], list2 = [1,3,4]",
    "sampleOutput": "[1,1,2,3,4,4]"
  },
  {
    "id": 37,
    "title": "Merge Two Sorted Lists #2",
    "topic": "linkedlist",
    "difficulty": "medium",
    "description": "You are given an array of `k` linked-lists `lists`, each linked list is sorted in ascending order. Merge all the linked lists into one sorted linked list and return it.",
    "sampleInput": "lists = [[1,4,5],[1,3,4],[2,6]]",
    "sampleOutput": "[1,1,2,3,4,4,5,6]"
  },
  {
    "id": 38,
    "title": "Merge Two Sorted Lists #3",
    "topic": "linkedlist",
    "difficulty": "medium",
    "description": "Given `k` singly linked lists, each sorted in ascending order. Merge them all into one sorted linked list. Your solution should use a divide and conquer approach, merging pairs of lists recursively.",
    "sampleInput": "lists = [[1,5],[2,8],[3,7],[4,6]]",
    "sampleOutput": "[1,2,3,4,5,6,7,8]"
  },
  {
    "id": 39,
    "title": "Merge Two Sorted Lists #4",
    "topic": "linkedlist",
    "difficulty": "hard",
    "description": "Given `k` unsorted linked lists, merge them all into one sorted linked list. This problem requires a different approach than merging sorted lists, possibly involving a min-heap or sorting all elements first.",
    "sampleInput": "lists = [[3,1],[4,2],[6,5]]",
    "sampleOutput": "[1,2,3,4,5,6]"
  },
  {
    "id": 40,
    "title": "Merge Two Sorted Lists #5",
    "topic": "linkedlist",
    "difficulty": "hard",
    "description": "Given two sorted linked lists `list1` and `list2`. Merge `list2` into `list1` such that `list2` nodes are inserted at intervals. For example, insert `list2`'s first node after `list1`'s first node, `list2`'s second node after `list1`'s third node, and so on.",
    "sampleInput": "list1 = [1,2,3,4,5], list2 = [10,20,30]",
    "sampleOutput": "[1,10,2,20,3,30,4,5]"
  },
  {
    "id": 41,
    "title": "Linked List Cycle #1",
    "topic": "linkedlist",
    "difficulty": "easy",
    "description": "Given the `head` of a linked list, return `true` if there is a cycle in the linked list. Otherwise, return `false`.",
    "sampleInput": "head = [3,2,0,-4], pos = 1 (Node at index 1 is connected to the last node)",
    "sampleOutput": "true"
  },
  {
    "id": 42,
    "title": "Linked List Cycle #2",
    "topic": "linkedlist",
    "difficulty": "medium",
    "description": "Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`. Do not modify the linked list.",
    "sampleInput": "head = [3,2,0,-4], pos = 1 (Node at index 1 is connected to the last node)",
    "sampleOutput": "Node with value 2"
  },
  {
    "id": 43,
    "title": "Linked List Cycle #3",
    "topic": "linkedlist",
    "difficulty": "medium",
    "description": "Given the `head` of a linked list, if there is a cycle, return the length of the cycle. If there is no cycle, return 0.",
    "sampleInput": "head = [3,2,0,-4], pos = 1 (Cycle: 2 -> 0 -> -4 -> 2)",
    "sampleOutput": "3"
  },
  {
    "id": 44,
    "title": "Linked List Cycle #4",
    "topic": "linkedlist",
    "difficulty": "hard",
    "description": "Given the `head` of a linked list, determine if it has a cycle. If it does, and the cycle contains exactly two nodes, modify the list to remove that cycle. Otherwise, leave it unchanged. Return `true` if a cycle was found and removed, `false` otherwise.",
    "sampleInput": "head = [1,2,3,4,2] (4 points to 2)",
    "sampleOutput": "true (List becomes [1,2,3,4])"
  },
  {
    "id": 45,
    "title": "Linked List Cycle #5",
    "topic": "linkedlist",
    "difficulty": "hard",
    "description": "Given a linked list, detect if it has a cycle. If a cycle exists, rearrange the nodes in the cycle such that they form a new linked list, and the original list becomes acyclic. Return the head of the new cycle list and the head of the modified original list.",
    "sampleInput": "head = [1,2,3,4,2] (4 points to 2)",
    "sampleOutput": "Original List: [1], Cycle List: [2,3,4]" // Conceptual output
  },
  {
    "id": 46,
    "title": "Binary Search #1",
    "topic": "binarysearch",
    "difficulty": "easy",
    "description": "Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return -1.",
    "sampleInput": "nums = [-1,0,3,5,9,12], target = 9",
    "sampleOutput": "4"
  },
  {
    "id": 47,
    "title": "Binary Search #2",
    "topic": "binarysearch",
    "difficulty": "medium",
    "description": "Given an array `nums` which is sorted in ascending order, and an integer `target`, search for `target` and return the first and last positions of `target` in the array. If `target` is not found in the array, return `[-1, -1]`.",
    "sampleInput": "nums = [5,7,7,8,8,10], target = 8",
    "sampleOutput": "[3,4]"
  },
  {
    "id": 48,
    "title": "Binary Search #3",
    "topic": "binarysearch",
    "difficulty": "medium",
    "description": "Given a `rotated` sorted array `nums` of unique elements, which was originally sorted in ascending order. Before being passed to your function, `nums` was rotated at an unknown pivot index `k`. Find the minimum element in this array.",
    "sampleInput": "nums = [3,4,5,1,2]",
    "sampleOutput": "1"
  },
  {
    "id": 49,
    "title": "Binary Search #4",
    "topic": "binarysearch",
    "difficulty": "hard",
    "description": "Given a `rotated` sorted array `nums` and an integer `target`, return the index of `target` if it is in `nums`, or -1 otherwise.",
    "sampleInput": "nums = [4,5,6,7,0,1,2], target = 0",
    "sampleOutput": "4"
  },
  {
    "id": 50,
    "title": "Binary Search #5",
    "topic": "binarysearch",
    "difficulty": "hard",
    "description": "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    "sampleInput": "nums1 = [1,2], nums2 = [3,4]",
    "sampleOutput": "2.5"
  },
  {
    "id": 51,
    "title": "Search a 2D Matrix #1",
    "topic": "binarysearch",
    "difficulty": "easy",
    "description": "Write an efficient algorithm that searches for a `target` value in an `m x n` integer `matrix`. This matrix has the following properties: Integers in each row are sorted from left to right. The first integer of each row is greater than the last integer of the previous row.",
    "sampleInput": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
    "sampleOutput": "true"
  },
  {
    "id": 52,
    "title": "Search a 2D Matrix #2",
    "topic": "binarysearch",
    "difficulty": "medium",
    "description": "Write an efficient algorithm that searches for a `target` value in an `m x n` integer `matrix`. This matrix has the following properties: Integers in each row are sorted in ascending order. Integers in each column are sorted in ascending order.",
    "sampleInput": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5",
    "sampleOutput": "true"
  },
  {
    "id": 53,
    "title": "Search a 2D Matrix #3",
    "topic": "binarysearch",
    "difficulty": "medium",
    "description": "Given an `m x n` binary `matrix`, return the distance of the nearest `1` for each cell. The distance between two adjacent cells is `1`.",
    "sampleInput": "matrix = [[0,0,0],[0,1,0],[0,0,0]]",
    "sampleOutput": "[[2,1,2],[1,0,1],[2,1,2]]"
  },
  {
    "id": 54,
    "title": "Search a 2D Matrix #4",
    "topic": "binarysearch",
    "difficulty": "hard",
    "description": "Given an `m x n` integer `matrix` where each row and column are sorted in ascending order, find the `k`-th smallest element in the matrix.",
    "sampleInput": "matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8",
    "sampleOutput": "13"
  },
  {
    "id": 55,
    "title": "Search a 2D Matrix #5",
    "topic": "binarysearch",
    "difficulty": "hard",
    "description": "Given an `m x n` binary `matrix`, `grid`, where `grid[i][j]` is either `0` or `1`. Return the number of elements `grid[i][j] = 1` such that `(i, j)` is the topmost, leftmost `1` in its row and column. Optimize for sparse matrices.",
    "sampleInput": "grid = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]",
    "sampleOutput": "2" // (0,3) and (1,2)
  },
  {
    "id": 56,
    "title": "Find Minimum in Rotated Sorted Array #1",
    "topic": "binarysearch",
    "difficulty": "easy",
    "description": "Suppose an array of length `n` sorted in ascending order is `rotated` between 1 and `n` times. For example, the array `nums = [0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]` if it was rotated 4 times. Find the minimum element of this array.",
    "sampleInput": "nums = [3,4,5,1,2]",
    "sampleOutput": "1"
  },
  {
    "id": 57,
    "title": "Find Minimum in Rotated Sorted Array #2",
    "topic": "binarysearch",
    "difficulty": "medium",
    "description": "Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., `[0,1,2,4,5,6,7]` might become `[4,5,6,7,0,1,2]`). If `duplicates` are allowed, find the minimum element.",
    "sampleInput": "nums = [1,3,5]",
    "sampleOutput": "1"
  },
  {
    "id": 58,
    "title": "Find Minimum in Rotated Sorted Array #3",
    "topic": "binarysearch",
    "difficulty": "medium",
    "description": "Given a `rotated` sorted array `nums` that may contain `duplicates`, return `true` if `target` is in `nums`, or `false` otherwise.",
    "sampleInput": "nums = [2,5,6,0,0,1,2], target = 0",
    "sampleOutput": "true"
  },
  {
    "id": 59,
    "title": "Find Minimum in Rotated Sorted Array #4",
    "topic": "binarysearch",
    "difficulty": "hard",
    "description": "Given a `circular` array `nums` (i.e., the next element of `nums[nums.length - 1]` is `nums[0]`), return the next greater element for every element. The next greater element of a number `x` is the first greater number to its traversing order in the array. If it does not exist, output -1 for this number.",
    "sampleInput": "nums = [1,2,1]",
    "sampleOutput": "[2,-1,2]"
  },
  {
    "id": 60,
    "title": "Find Minimum in Rotated Sorted Array #5",
    "topic": "binarysearch",
    "difficulty": "hard",
    "description": "Given a `circular` sorted array `nums` which has been rotated. Find the `k`-th smallest element in this array. The array might contain duplicates.",
    "sampleInput": "nums = [3,1,3], k = 2",
    "sampleOutput": "3"
  },
  {
    "id": 61,
    "title": "Longest Substring Without Repeating Characters #1",
    "topic": "slidingwindow",
    "difficulty": "easy",
    "description": "Given a string `s`, find the length of the longest substring without repeating characters.",
    "sampleInput": "s = \"abcabcbb\"",
    "sampleOutput": "3 (\"abc\")"
  },
  {
    "id": 62,
    "title": "Longest Substring Without Repeating Characters #2",
    "topic": "slidingwindow",
    "difficulty": "medium",
    "description": "Given a string `s`, find the length of the longest substring without repeating characters. If there are multiple such substrings, return any one of them.",
    "sampleInput": "s = \"pwwkew\"",
    "sampleOutput": "3 (\"wke\")"
  },
  {
    "id": 63,
    "title": "Longest Substring Without Repeating Characters #3",
    "topic": "slidingwindow",
    "difficulty": "medium",
    "description": "Given a string `s` and an integer `k`, find the length of the longest substring `T` of `s` that contains at most `k` distinct characters.",
    "sampleInput": "s = \"eceba\", k = 2",
    "sampleOutput": "3 (\"ece\")"
  },
  {
    "id": 64,
    "title": "Longest Substring Without Repeating Characters #4",
    "topic": "slidingwindow",
    "difficulty": "hard",
    "description": "Given a string `s` and an integer `k`, return the length of the longest substring of `s` such that the frequency of each character in that substring is greater than or equal to `k`.",
    "sampleInput": "s = \"aaabb\", k = 3",
    "sampleOutput": "3 (\"aaa\")"
  },
  {
    "id": 65,
    "title": "Longest Substring Without Repeating Characters #5",
    "topic": "slidingwindow",
    "difficulty": "hard",
    "description": "Given a string `s` and a positive integer `k`, find the length of the shortest substring `T` of `s` that contains at least `k` distinct characters. If no such substring exists, return -1.",
    "sampleInput": "s = \"abacaba\", k = 3",
    "sampleOutput": "4 (\"bac\" or \"aca\")"
  },
  {
    "id": 66,
    "title": "Maximum Subarray #1",
    "topic": "slidingwindow",
    "difficulty": "easy",
    "description": "Given an integer array `nums`, find the subarray with the largest sum, and return its sum.",
    "sampleInput": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "sampleOutput": "6 ([4,-1,2,1])"
  },
  {
    "id": 67,
    "title": "Maximum Subarray #2",
    "topic": "slidingwindow",
    "difficulty": "medium",
    "description": "Given an integer array `nums`, find the subarray with the largest product, and return its product.",
    "sampleInput": "nums = [2,3,-2,4]",
    "sampleOutput": "6 ([2,3])"
  },
  {
    "id": 68,
    "title": "Maximum Subarray #3",
    "topic": "slidingwindow",
    "difficulty": "medium",
    "description": "Given a circular integer array `nums` of length `n`, return the maximum possible sum of a non-empty subarray of `nums`.",
    "sampleInput": "nums = [5,-3,5]",
    "sampleOutput": "10 ([5,5])"
  },
  {
    "id": 69,
    "title": "Maximum Subarray #4",
    "topic": "slidingwindow",
    "difficulty": "hard",
    "description": "Given an array `nums` and an integer `k`, return the maximum sum of a subarray of size `k`.",
    "sampleInput": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    "sampleOutput": "16 ([5,3,6,7])" // Correct subarray sum for [5,3,6] is 14, for [3,6,7] is 16.
  },
  {
    "id": 70,
    "title": "Maximum Subarray #5",
    "topic": "slidingwindow",
    "difficulty": "hard",
    "description": "Given an integer array `nums`, return the sum of the minimum and maximum elements in all non-empty subarrays of `nums`.",
    "sampleInput": "nums = [1,2,3]",
    "sampleOutput": "20" // (1+1) + (2+2) + (3+3) + (1+2) + (2+3) + (1+3) = 2+4+6+3+5+4 = 24
  },
  {
    "id": 71,
    "title": "Sliding Window Maximum #1",
    "topic": "slidingwindow",
    "difficulty": "easy",
    "description": "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. You can only see the `k` numbers in the window. Return the maximum sliding window.",
    "sampleInput": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    "sampleOutput": "[3,3,5,5,6,7]"
  },
  {
    "id": 72,
    "title": "Sliding Window Maximum #2",
    "topic": "slidingwindow",
    "difficulty": "medium",
    "description": "You are given an array of integers `nums`, and a window of size `k`. Return an array of the minimum element in each sliding window.",
    "sampleInput": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    "sampleOutput": "[-1,-3,-3,-3,3,3]"
  },
  {
    "id": 73,
    "title": "Sliding Window Maximum #3",
    "topic": "slidingwindow",
    "difficulty": "medium",
    "description": "Given an array `nums` and a window size `k`. For each sliding window, return the sum of its elements.",
    "sampleInput": "nums = [1,2,3,4,5], k = 3",
    "sampleOutput": "[6,9,12]" // (1+2+3), (2+3+4), (3+4+5)
  },
  {
    "id": 74,
    "title": "Sliding Window Maximum #4",
    "topic": "slidingwindow",
    "difficulty": "hard",
    "description": "Given an array `nums` and a window size `k`. For each sliding window, return the *median* of its elements. The median is the middle value in an ordered integer list. If the size of the list is even, there is no single middle value, and the median is the average of the two middle values.",
    "sampleInput": "nums = [1,2,3,4,5], k = 3",
    "sampleOutput": "[2,3,4]" // (median of [1,2,3] is 2), (median of [2,3,4] is 3), (median of [3,4,5] is 4)
  },
  {
    "id": 75,
    "title": "Sliding Window Maximum #5",
    "topic": "slidingwindow",
    "difficulty": "hard",
    "description": "Given an array of integers `nums` and an integer `k`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. Return the *range* (max - min) of values in each sliding window.",
    "sampleInput": "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    "sampleOutput": "[4,6,8,8,3,4]" // For [1,3,-1], max=3, min=-1, range=4. For [3,-1,-3], max=3, min=-3, range=6. etc.
  },
  {
    "id": 76,
    "title": "Invert Binary Tree #1",
    "topic": "tree",
    "difficulty": "easy",
    "description": "Given the `root` of a binary tree, invert the tree, and return its `root`.",
    "sampleInput": "root = [4,2,7,1,3,6,9]",
    "sampleOutput": "[4,7,2,9,6,3,1]"
  },
  {
    "id": 77,
    "title": "Invert Binary Tree #2",
    "topic": "tree",
    "difficulty": "medium",
    "description": "Given the `root` of a binary tree, invert it level by level. That is, for each level, swap the left and right children.",
    "sampleInput": "root = [1,2,3,4,5,6,7]",
    "sampleOutput": "[1,3,2,7,6,5,4]"
  },
  {
    "id": 78,
    "title": "Invert Binary Tree #3",
    "topic": "tree",
    "difficulty": "medium",
    "description": "Given the `root` of a binary tree, invert the tree but only for nodes at odd depths (root is at depth 0).",
    "sampleInput": "root = [1,2,3,4,5,6,7]",
    "sampleOutput": "[1,3,2,5,4,7,6]"
  },
  {
    "id": 79,
    "title": "Invert Binary Tree #4",
    "topic": "tree",
    "difficulty": "hard",
    "description": "Given a binary tree, flatten it into a linked list in-place. The 'linked list' should use the `right` child pointer, and the `left` child pointer should always be `null`.",
    "sampleInput": "root = [1,2,5,3,4,null,6]",
    "sampleOutput": "[1,null,2,null,3,null,4,null,5,null,6]"
  },
  {
    "id": 80,
    "title": "Invert Binary Tree #5",
    "topic": "tree",
    "difficulty": "hard",
    "description": "Given a binary tree, serialize it into a string, and deserialize the string back into a binary tree. Design the serialization and deserialization functions.",
    "sampleInput": "root = [1,2,3,null,null,4,5]",
    "sampleOutput": "\"1,2,null,null,3,4,null,null,5,null,null\" (example string representation)"
  },
  {
    "id": 81,
    "title": "Maximum Depth of Binary Tree #1",
    "topic": "tree",
    "difficulty": "easy",
    "description": "Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
    "sampleInput": "root = [3,9,20,null,null,15,7]",
    "sampleOutput": "3"
  },
  {
    "id": 82,
    "title": "Maximum Depth of Binary Tree #2",
    "topic": "tree",
    "difficulty": "medium",
    "description": "Given the `root` of a binary tree, return the minimum depth of the tree. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.",
    "sampleInput": "root = [2,null,3,null,4,null,5,null,6]",
    "sampleOutput": "5"
  },
    {
    "id": 83,
    "title": "Maximum Depth of Binary Tree #3",
    "topic": "tree",
    "difficulty": "medium",
    "description": "Given the `root` of a binary tree, return the sum of depths of all nodes in the tree.",
    "sampleInput": "root = [1,2,3]",
    "sampleOutput": "4 (Depth of 1 is 0, 2 is 1, 3 is 1. Sum = 0+1+1=2. Oh, if root is depth 1, then sum = 1+2+2 = 5.)",
    "sampleOutput": "2" // (Assuming root depth 0)
  },
  {
    "id": 84,
    "title": "Maximum Depth of Binary Tree #4",
    "topic": "tree",
    "difficulty": "hard",
    "description": "Given the `root` of a binary tree, return the number of nodes in the tree.",
    "sampleInput": "root = [1,2,3,4,5,6]",
    "sampleOutput": "6"
  },
  {
    "id": 85,
    "title": "Maximum Depth of Binary Tree #5",
    "topic": "tree",
    "difficulty": "hard",
    "description": "Given the `root` of a binary tree, return the height-balanced status. A binary tree is height-balanced if the depth of the two subtrees of every node never differs by more than one.",
    "sampleInput": "root = [3,9,20,null,null,15,7]",
    "sampleOutput": "true"
  },
  {
    "id": 86,
    "title": "Same Tree #1",
    "topic": "tree",
    "difficulty": "easy",
    "description": "Given the roots of two binary trees `p` and `q`, return `true` if they are the same tree, or `false` otherwise. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
    "sampleInput": "p = [1,2,3], q = [1,2,3]",
    "sampleOutput": "true"
  },
  {
    "id": 87,
    "title": "Same Tree #2",
    "topic": "tree",
    "difficulty": "medium",
    "description": "Given the roots of two binary trees, `p` and `q`, return `true` if `p` is a subtree of `q`. A subtree of `q` is a tree that consists of a node in `q` and all of its descendants. The tree `q` could also be considered as a subtree of itself.",
    "sampleInput": "p = [3,4,5], q = [3,4,5,1,2]",
    "sampleOutput": "true"
  },
  {
    "id": 88,
    "title": "Same Tree #3",
    "topic": "tree",
    "difficulty": "medium",
    "description": "Given the `root` of a binary tree, determine if it is a mirror of itself (i.e., symmetric around its center).",
    "sampleInput": "root = [1,2,2,3,4,4,3]",
    "sampleOutput": "true"
  },
  {
    "id": 89,
    "title": "Same Tree #4",
    "topic": "tree",
    "difficulty": "hard",
    "description": "Given the roots of two binary trees, `p` and `q`. Return `true` if `p` and `q` are 'similar' trees, where similar means they have the same shape but possibly different values. (Focus on structural identity).",
    "sampleInput": "p = [1,2,null,3], q = [5,6,null,7]",
    "sampleOutput": "true"
  },
  {
    "id": 90,
    "title": "Same Tree #5",
    "topic": "tree",
    "difficulty": "hard",
    "description": "Given the roots of two binary trees, `p` and `q`. Return the minimum number of swaps needed to make `p` and `q` identical. You can swap any two nodes in either tree.",
    "sampleInput": "p = [1,2,3], q = [1,3,2]",
    "sampleOutput": "1" // (Swap 2 and 3 in q)
  },
  {
    "id": 91,
    "title": "Number of Islands #1",
    "topic": "graph",
    "difficulty": "easy",
    "description": "Given an `m x n` 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    "sampleInput": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
    "sampleOutput": "1"
  },
  {
    "id": 92,
    "title": "Number of Islands #2",
    "topic": "graph",
    "difficulty": "medium",
    "description": "You are given an `m x n` binary grid `grid`. An island is a group of `1`'s (representing land) connected horizontally or vertically. You may assume all four edges of the grid are surrounded by water. The `area` of an island is the number of cells with a value of `1` in the island. Return the maximum area of an island in `grid`.",
    "sampleInput": "grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]",
    "sampleOutput": "6"
  },
  {
    "id": 93,
    "title": "Number of Islands #3",
    "topic": "graph",
    "difficulty": "medium",
    "description": "You are given an `m x n` binary grid `grid` which represents a map of '0's (water) and '1's (land). An island is a group of '1's (land) connected horizontally or vertically. Return the number of `closed` islands. A closed island is an island that is totally surrounded by '0's (water). That means you cannot reach the boundary of the grid from the island.",
    "sampleInput": "grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]",
    "sampleOutput": "2"
  },
  {
    "id": 94,
    "title": "Number of Islands #4",
    "topic": "graph",
    "difficulty": "hard",
    "description": "Given a 2D grid of 0s and 1s, each 1 represents land and 0 represents water. Count the number of distinct islands. An island is considered to be the same if it has the same shape (can be rotated or flipped).",
    "sampleInput": "grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]",
    "sampleOutput": "1" // Two islands, but they are the same shape.
  },
  {
    "id": 95,
    "title": "Number of Islands #5",
    "topic": "graph",
    "difficulty": "hard",
    "description": "You are given a grid of dimensions `m * n` consisting of `0`'s and `1`'s. Find the number of distinct islands where an island is formed by connecting adjacent `1`'s horizontally or vertically. The islands must be `disconnected` from each other by water. (Focus on efficient island detection and shape comparison).",
    "sampleInput": "grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]",
    "sampleOutput": "3"
  },
  {
    "id": 96,
    "title": "Clone Graph #1",
    "topic": "graph",
    "difficulty": "easy",
    "description": "Given a reference of a node in a connected undirected graph. Return a deep copy (clone) of the graph. Each node in the graph contains a `val` (int) and a list (`neighbors`) of their neighbors.",
    "sampleInput": "Input: adjacency list = [[2,4],[1,3],[2,4],[1,3]]",
    "sampleOutput": "Output: adjacency list = [[2,4],[1,3],[2,4],[1,3]] (A deep copy of the original graph)"
  },
  {
    "id": 97,
    "title": "Clone Graph #2",
    "topic": "graph",
    "difficulty": "medium",
    "description": "Given the `root` of an N-ary tree, return a deep copy (clone) of the tree. Each node has a `val` and a list (`children`) of its children.",
    "sampleInput": "root = [1,null,3,2,4,null,5,6]",
    "sampleOutput": "A deep copy of the input N-ary tree."
  },
  {
    "id": 98,
    "title": "Clone Graph #3",
    "topic": "graph",
    "difficulty": "medium",
    "description": "Given a `directed` graph, return a deep copy (clone) of the graph. The graph might contain cycles.",
    "sampleInput": "Graph with nodes 1->2, 2->3, 3->1",
    "sampleOutput": "A deep copy of the directed cyclic graph."
  },
  {
    "id": 99,
    "title": "Clone Graph #4",
    "topic": "graph",
    "difficulty": "hard",
    "description": "Given a graph with `val` and `neighbors` as well as an additional `random` pointer that points to any node in the graph (or null). Return a deep copy (clone) of the graph.",
    "sampleInput": "Graph with nodes and random pointers (e.g., [[7,null],[13,0],[11,4],[10,2],[1,0]])",
    "sampleOutput": "A deep copy including `val`, `neighbors`, and `random` pointers."
  },
  {
    "id": 100,
    "title": "Clone Graph #5",
    "topic": "graph",
    "difficulty": "hard",
    "description": "Given a graph where nodes can be colored. Each node has a `val`, `neighbors`, and `color`. The color property should also be deeply copied. Assume colors are integers.",
    "sampleInput": "Graph with nodes 1(red)->2(blue), 2(blue)->3(red)",
    "sampleOutput": "A deep copy preserving node values, neighbors, and colors."
  },
  {
    "id": 101,
    "title": "Course Schedule #1",
    "topic": "graph",
    "difficulty": "easy",
    "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. Return `true` if you can finish all courses. Otherwise, return `false`.",
    "sampleInput": "numCourses = 2, prerequisites = [[1,0]]",
    "sampleOutput": "true"
  },
  {
    "id": 102,
    "title": "Course Schedule #2",
    "topic": "graph",
    "difficulty": "medium",
    "description": "There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.",
    "sampleInput": "numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]",
    "sampleOutput": "[0,1,2,3] (or [0,2,1,3])"
  },
  {
    "id": 103,
    "title": "Course Schedule #3",
    "topic": "graph",
    "difficulty": "medium",
    "description": "There are `n` courses, labeled from `1` to `n`. You are given a list of `prerequisites` where `prerequisites[i] = [courseA, courseB]` means you must take `courseB` before `courseA`. You are also given an integer `k`. Find the minimum number of courses you need to take to satisfy all prerequisites for `k` target courses. (Focus on finding the minimal set of dependencies).",
    "sampleInput": "n = 5, prerequisites = [[1,2],[2,3],[3,4]], k = [1,5]",
    "sampleOutput": "4" // (Courses 4,3,2,1 needed for 1. Course 5 is independent. Min courses needed for target 1 = 4)
  },
  {
    "id": 104,
    "title": "Course Schedule #4",
    "topic": "graph",
    "difficulty": "hard",
    "description": "There are `n` courses. You are given `prerequisites` and `queries`. For each query `[u, v]`, check if course `u` is a prerequisite of course `v`. (This means `u` must be taken before `v`, directly or indirectly).",
    "sampleInput": "n = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]",
    "sampleOutput": "[true, false]"
  },
  {
    "id": 105,
    "title": "Course Schedule #5",
    "topic": "graph",
    "difficulty": "hard",
    "description": "Given `n` courses and `prerequisites`. If you can complete all courses, find the number of valid course orderings.",
    "sampleInput": "n = 3, prerequisites = [[1,0],[2,0]]",
    "sampleOutput": "2" // ([0,1,2], [0,2,1])
  },
  {
    "id": 106,
    "title": "Climbing Stairs #1",
    "topic": "dp",
    "difficulty": "easy",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "sampleInput": "n = 2",
    "sampleOutput": "2 (1+1, 2)"
  },
  {
    "id": 107,
    "title": "Climbing Stairs #2",
    "topic": "dp",
    "difficulty": "medium",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can climb `1`, `2`, or `3` steps. In how many distinct ways can you climb to the top?",
    "sampleInput": "n = 3",
    "sampleOutput": "4 (1+1+1, 1+2, 2+1, 3)"
  },
  {
    "id": 108,
    "title": "Climbing Stairs #3",
    "topic": "dp",
    "difficulty": "medium",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. You are given an integer array `cost` where `cost[i]` is the cost of `i`-th step. Once you pay the cost, you can either climb one or two steps. You can either start from step `0` or step `1`. Return the minimum cost to reach the top of the floor.",
    "sampleInput": "cost = [10,15,20]",
    "sampleOutput": "15" // (Start at cost[1], pay 15, and climb two steps to reach the top.)
  },
  {
    "id": 109,
    "title": "Climbing Stairs #4",
    "topic": "dp",
    "difficulty": "hard",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. You are given an array `steps` where `steps[i]` is the number of steps you can climb from the current step `i`. Find the minimum number of jumps to reach the last index.",
    "sampleInput": "steps = [2,3,1,1,4]",
    "sampleOutput": "2 (Jump 1 step from index 0 to 1, then 3 steps to the last index.)"
  },
  {
    "id": 110,
    "title": "Climbing Stairs #5",
    "topic": "dp",
    "difficulty": "hard",
    "description": "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can climb any number of steps from a given set of allowed jumps `jumpSizes`. In how many distinct ways can you climb to the top?",
    "sampleInput": "n = 4, jumpSizes = [1,3,4]",
    "sampleOutput": "4 (1+1+1+1, 1+3, 3+1, 4)"
  },
  {
    "id": 111,
    "title": "House Robber #1",
    "topic": "dp",
    "difficulty": "easy",
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses are broken into on the same night. Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.",
    "sampleInput": "nums = [1,2,3,1]",
    "sampleOutput": "4 (Rob house 1 (money = 1) and then rob house 3 (money = 3). Total amount = 1 + 3 = 4.)"
  },
  {
    "id": 112,
    "title": "House Robber #2",
    "topic": "dp",
    "difficulty": "medium",
    "description": "You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses are arranged in a circle. That means the first house is the neighbor of the last one. Return the maximum amount of money you can rob tonight without alerting the police.",
    "sampleInput": "nums = [2,3,2]",
    "sampleOutput": "3 (You cannot rob house 0 and house 2 directly because they are adjacent.)"
  },
  {
    "id": 113,
    "title": "House Robber #3",
    "topic": "dp",
    "difficulty": "medium",
    "description": "The houses in this street are arranged in a binary tree. Each house has a certain amount of money. The constraint is that you cannot rob adjacent houses (parent and child, or siblings). Find the maximum amount of money you can rob without alerting the police.",
    "sampleInput": "root = [3,2,3,null,3,null,1]",
    "sampleOutput": "7 (Rob houses 3 and 3. Total 6. Or rob house 3, then 1.)",
    "sampleOutput": "7" // (Rob root (3) and its grandchildren (3 and 1) or its children's children (2+3 = 5))
  },
  {
    "id": 114,
    "title": "House Robber #4",
    "topic": "dp",
    "difficulty": "hard",
    "description": "You are given `k` non-overlapping houses that can be robbed. For each house, you are given the amount of money it contains. You cannot rob adjacent houses. Find the maximum total amount of money you can rob if you can only rob exactly `k` houses.",
    "sampleInput": "nums = [2,7,9,3,1], k = 2",
    "sampleOutput": "11 (Rob 2 and 9)"
  },
  {
    "id": 115,
    "title": "House Robber #5",
    "topic": "dp",
    "difficulty": "hard",
    "description": "You are given a street with houses represented by `nums`. You are also given an integer `maxRobFrequency`, meaning you cannot rob more than `maxRobFrequency` consecutive houses. Find the maximum amount of money you can rob.",
    "sampleInput": "nums = [1,2,3,4,5], maxRobFrequency = 2",
    "sampleOutput": "12 (Rob 1,2,4,5 or 1,3,4,5, or 1,2,3,5 or 1,2,4,5. 2+3+5=10? 1+2+4+5=12. Max: 1,2,4,5 = 12)"
  },
  {
    "id": 116,
    "title": "Longest Palindromic Substring #1",
    "topic": "dp",
    "difficulty": "easy",
    "description": "Given a string `s`, return the longest palindromic substring in `s`.",
    "sampleInput": "s = \"babad\"",
    "sampleOutput": "\"bab\" (or \"aba\")"
  },
  {
    "id": 117,
    "title": "Longest Palindromic Substring #2",
    "topic": "dp",
    "difficulty": "medium",
    "description": "Given a string `s`, return the number of palindromic substrings in it. A substring is a contiguous sequence of characters within the string.",
    "sampleInput": "s = \"abc\"",
    "sampleOutput": "3 (\"a\", \"b\", \"c\")"
  },
  {
    "id": 118,
    "title": "Longest Palindromic Substring #3",
    "topic": "dp",
    "difficulty": "medium",
    "description": "Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindromic partitioning of `s`.",
    "sampleInput": "s = \"aab\"",
    "sampleOutput": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]"
  },
  {
    "id": 119,
    "title": "Longest Palindromic Substring #4",
    "topic": "dp",
    "difficulty": "hard",
    "description": "Given a string `s` and an integer `k`, return the minimum number of changes needed to make `s` a palindrome, where `k` represents the maximum number of characters you can change.",
    "sampleInput": "s = \"aabbc\", k = 1",
    "sampleOutput": "1 (Change 'c' to 'a' or 'b' to form \"aabba\" or \"aabba\")"
  },
  {
    "id": 120,
    "title": "Longest Palindromic Substring #5",
    "topic": "dp",
    "difficulty": "hard",
    "description": "Given a string `s`, find the length of the longest palindromic subsequence in `s`. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.",
    "sampleInput": "s = \"bbbab\"",
    "sampleOutput": "4 (\"bbbb\")"
  },
  {
    "id": 121,
    "title": "Jump Game #1",
    "topic": "greedy",
    "difficulty": "easy",
    "description": "You are given an integer array `nums`. You are initially positioned at `nums[0]`. Each element in `nums` represents your maximum jump length at that position. Return `true` if you can reach the last index, or `false` otherwise.",
    "sampleInput": "nums = [2,3,1,1,4]",
    "sampleOutput": "true"
  },
  {
    "id": 122,
    "title": "Jump Game #2",
    "topic": "greedy",
    "difficulty": "medium",
    "description": "You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at `nums[0]`. Each element `nums[i]` represents the maximum length of a forward jump from index `i`. Return the minimum number of jumps to reach `nums[n - 1]`.",
    "sampleInput": "nums = [2,3,1,1,4]",
    "sampleOutput": "2"
  },
  {
    "id": 123,
    "title": "Jump Game #3",
    "topic": "greedy",
    "difficulty": "medium",
    "description": "Given an array of non-negative integers `arr` and a start index `start`. When you are at index `i`, you can jump to `i + arr[i]` or `i - arr[i]`. Return `true` if you can reach any index with value 0, or `false` otherwise.",
    "sampleInput": "arr = [4,2,3,0,3,1,2], start = 5",
    "sampleOutput": "true"
  },
  {
    "id": 124,
    "title": "Jump Game #4",
    "topic": "greedy",
    "difficulty": "hard",
    "description": "Given an array `arr` of integers, you are initially at the first index of the array. In one step, you can jump from index `i` to index `j` if: `i + 1 == j` or `i - 1 == j` or `arr[i] == arr[j]`. Return the minimum number of steps to reach the last index of the array.",
    "sampleInput": "arr = [6,1,9]",
    "sampleOutput": "2" // (0 -> 1 -> 2)
  },
  {
    "id": 125,
    "title": "Jump Game #5",
    "topic": "greedy",
    "difficulty": "hard",
    "description": "Given an array of positive integers `nums`, you are initially at index 0. You want to reach the last index. In each step, you can jump from index `i` to `i + 1`, `i + 2`, ..., `i + k`, where `k` is a given maximum jump length. Find the minimum number of jumps to reach the last index.",
    "sampleInput": "nums = [1, 2, 0, 1], k = 2",
    "sampleOutput": "2 (Jump from 0 to 2, then 2 to 3)" // Conceptual
  },
  {
    "id": 126,
    "title": "Gas Station #1",
    "topic": "greedy",
    "difficulty": "easy",
    "description": "There are `n` gas stations along a circular route, where the amount of gas at the `i`th station is `gas[i]`. You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from station `i` to its next station `(i + 1) % n`. Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.",
    "sampleInput": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
    "sampleOutput": "3 (Start at index 3, gas[3]=4, cost[3]=1. You can complete the circuit.)"
  },
  {
    "id": 127,
    "title": "Gas Station #2",
    "topic": "greedy",
    "difficulty": "medium",
    "description": "You are given `n` gas stations along a linear route. Each station `i` has `gas[i]` fuel and it costs `cost[i]` to travel to station `i+1`. You start with an empty tank at station 0. Find the maximum distance you can travel. If you cannot move from station 0, return 0.",
    "sampleInput": "gas = [1,2,3,4], cost = [2,1,1,1]",
    "sampleOutput": "4" // (Can travel all 4 stations: 0->1->2->3->4)
  },
  {
    "id": 128,
    "title": "Gas Station #3",
    "topic": "greedy",
    "difficulty": "medium",
    "description": "Given `n` gas stations and their `gas` and `cost`. You can only make at most `k` stops. Find the maximum distance you can travel starting from station 0, such that you never run out of gas. Each stop refills your tank to full capacity if you choose to stop.",
    "sampleInput": "gas = [10, 20, 0, 30], cost = [5, 5, 25, 5], k = 1",
    "sampleOutput": "3" // (Start with 10. Go to station 1 (cost 5, rem 5). Go to station 2 (cost 5, rem 0). Must stop at 2. If stop, tank full (0). Can't reach 3. Max distance = 2. Oh, if you fill up at station 1, you can go to station 3)
  },
  {
    "id": 129,
    "title": "Gas Station #4",
    "topic": "greedy",
    "difficulty": "hard",
    "description": "You are given `n` gas stations. Each station `i` has `gas[i]` fuel and it costs `cost[i]` to travel to station `i+1`. You have a car with a limited tank capacity `tankCapacity`. You start with an empty tank at station 0. Find the minimum number of refills to reach the last station. If it's impossible, return -1.",
    "sampleInput": "tankCapacity = 10, gas = [1,5,2,4,3], cost = [2,2,2,2,2]",
    "sampleOutput": "2" // (Fill at 0 (gas=1), travel 1. Fill at 1 (gas=5), travel 2. Fill at 3 (gas=4), travel 2)
  },
  {
    "id": 130,
    "title": "Gas Station #5",
    "topic": "greedy",
    "difficulty": "hard",
    "description": "You are given `n` gas stations in a circular route. Each station `i` has `gas[i]` fuel and it costs `cost[i]` to travel to station `(i + 1) % n`. Find the station where if you start with an empty tank, you can complete the circuit and arrive back with the *maximum* remaining fuel.",
    "sampleInput": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
    "sampleOutput": "3 (Starting at index 3 yields maximum remaining fuel of 3)"
  },
  {
    "id": 131,
    "title": "Candy #1",
    "topic": "greedy",
    "difficulty": "easy",
    "description": "There are `n` children standing in a line. Each child is assigned a rating value. You are giving candies to these children subjected to the following requirements: Each child must have at least one candy. Children with a higher rating get more candies than their neighbors. Return the minimum number of candies you need to have to distribute candies to all the children.",
    "sampleInput": "ratings = [1,0,2]",
    "sampleOutput": "5" // (Candies: [2,1,2])
  },
  {
    "id": 132,
    "title": "Candy #2",
    "topic": "greedy",
    "difficulty": "medium",
    "description": "There are `n` children in a line with ratings. You need to distribute candies such that each child gets at least one, and children with a higher rating get more than their neighbors. Additionally, if two children have the same rating, they must receive the same number of candies. Return the minimum total candies.",
    "sampleInput": "ratings = [1,2,2]",
    "sampleOutput": "4" // (Candies: [1,2,1])
  },
  {
    "id": 133,
    "title": "Candy #3",
    "topic": "greedy",
    "difficulty": "medium",
    "description": "You are given `n` children with ratings. Each child must get at least one candy. Children with a strictly higher rating get strictly more candies than their adjacent neighbors. Children with the same rating can get different amounts of candies. Return the minimum total candies.",
    "sampleInput": "ratings = [1,2,1]",
    "sampleOutput": "4" // (Candies: [1,2,1])
  },
  {
    "id": 134,
    "title": "Candy #4",
    "topic": "greedy",
    "difficulty": "hard",
    "description": "Given `n` children with ratings arranged in a circle. Distribute candies such that each child has at least one, and children with higher ratings get more than their neighbors. Return the minimum total candies needed.",
    "sampleInput": "ratings = [1,2,3,1]",
    "sampleOutput": "7" // (Candies: [1,2,3,1])
  },
  {
    "id": 135,
    "title": "Candy #5",
    "topic": "greedy",
    "difficulty": "hard",
    "description": "Given `n` children with ratings. You must give each child at least one candy. For any child `i`, if `ratings[i] > ratings[i-1]` (circularly), then `candies[i] > candies[i-1]`. If `ratings[i] == ratings[i-1]`, then `candies[i]` must be `candies[i-1] + 1` or `candies[i-1]`. Find the minimum total candies. (Complex rules for same ratings).",
    "sampleInput": "ratings = [1,2,2,1]",
    "sampleOutput": "6" // (Candies: [1,2,2,1])
  },
  {
    "id": 136,
    "title": "Subsets #1",
    "topic": "backtracking",
    "difficulty": "easy",
    "description": "Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    "sampleInput": "nums = [1,2,3]",
    "sampleOutput": "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]"
  },
  {
    "id": 137,
    "title": "Subsets #2",
    "topic": "backtracking",
    "difficulty": "medium",
    "description": "Given an integer array `nums` that may contain duplicates, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Return the solution in any order.",
    "sampleInput": "nums = [1,2,2]",
    "sampleOutput": "[[],[1],[1,2],[1,2,2],[2],[2,2]]"
  },
  {
    "id": 138,
    "title": "Subsets #3",
    "topic": "backtracking",
    "difficulty": "medium",
    "description": "Given an integer array `nums` and an integer `k`, return all possible subsets of size `k`.",
    "sampleInput": "nums = [1,2,3,4], k = 2",
    "sampleOutput": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]"
  },
  {
    "id": 139,
    "title": "Subsets #4",
    "topic": "backtracking",
    "difficulty": "hard",
    "description": "Given a collection of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` where the chosen numbers sum to `target`. Each number in `candidates` may only be used once in the combination.",
    "sampleInput": "candidates = [10,1,2,7,6,1,5], target = 8",
    "sampleOutput": "[[1,1,6],[1,2,5],[1,7],[2,6]]"
  },
  {
    "id": 140,
    "title": "Subsets #5",
    "topic": "backtracking",
    "difficulty": "hard",
    "description": "Given a set of characters `chars` and a length `len`, generate all unique strings of length `len` using characters from `chars` such that no two adjacent characters are the same. (Focus on permutation with constraints).",
    "sampleInput": "chars = ['a', 'b', 'c'], len = 2",
    "sampleOutput": "[\"ab\",\"ac\",\"ba\",\"bc\",\"ca\",\"cb\"]"
  },
  {
    "id": 141,
    "title": "Permutations #1",
    "topic": "backtracking",
    "difficulty": "easy",
    "description": "Given an array `nums` of distinct integers, return all the possible permutations. You can return the answer in any order.",
    "sampleInput": "nums = [1,2,3]",
    "sampleOutput": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"
  },
  {
    "id": 142,
    "title": "Permutations #2",
    "topic": "backtracking",
    "difficulty": "medium",
    "description": "Given a collection of numbers that might contain duplicates, return all possible unique permutations. You can return the answer in any order.",
    "sampleInput": "nums = [1,1,2]",
    "sampleOutput": "[[1,1,2],[1,2,1],[2,1,1]]"
  },
  {
    "id": 143,
    "title": "Permutations #3",
    "topic": "backtracking",
    "difficulty": "medium",
    "description": "Given a string `s`, return all permutations of the string. You can return the answer in any order.",
    "sampleInput": "s = \"abc\"",
    "sampleOutput": "[\"abc\",\"acb\",\"bac\",\"bca\",\"cab\",\"cba\"]"
  },
  {
    "id": 144,
    "title": "Permutations #4",
    "topic": "backtracking",
    "difficulty": "hard",
    "description": "Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.",
    "sampleInput": "s1 = \"ab\", s2 = \"eidbaooo\"",
    "sampleOutput": "true (s2 contains \"ba\")"
  },
  {
    "id": 145,
    "title": "Permutations #5",
    "topic": "backtracking",
    "difficulty": "hard",
    "description": "Given a string `s`, and an integer `k`. Find the `k`-th lexicographical permutation of `s` (assuming `s` contains distinct characters).",
    "sampleInput": "s = \"abc\", k = 3",
    "sampleOutput": "\"bac\""
  },
  {
    "id": 146,
    "title": "Word Search #1",
    "topic": "backtracking",
    "difficulty": "easy",
    "description": "Given an `m x n` `board` of characters and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    "sampleInput": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
    "sampleOutput": "true"
  },
  {
    "id": 147,
    "title": "Word Search #2",
    "topic": "backtracking",
    "difficulty": "medium",
    "description": "Given an `m x n` `board` of characters and a `list of strings` `words`, return all words in the dictionary that can be found in the board. Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in the same word.",
    "sampleInput": "board = [[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words = [\"oath\",\"pea\",\"eat\",\"rain\"]",
    "sampleOutput": "[\"eat\",\"oath\"]"
  },
  {
    "id": 148,
    "title": "Word Search #3",
    "topic": "backtracking",
    "difficulty": "medium",
    "description": "Given a 2D `board` and a `word`, find if the `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where 'adjacent' includes diagonally neighboring cells. The same letter cell may not be used more than once.",
    "sampleInput": "board = [[\"A\",\"B\"],[\"C\",\"D\"]], word = \"AC\"",
    "sampleOutput": "true"
  },
  {
    "id": 149,
    "title": "Word Search #4",
    "topic": "backtracking",
    "difficulty": "hard",
    "description": "Given a `grid` of characters and a dictionary `words`. Find all words from the dictionary that can be found in the grid by connecting adjacent cells (horizontally, vertically, or diagonally) where each cell can be used multiple times in the same word. (Focus on Tries and pathfinding with reuse).",
    "sampleInput": "grid = [[\"o\",\"a\"],[\"t\",\"h\"]], words = [\"oath\",\"toad\"]",
    "sampleOutput": "[\"oath\"]"
  },
  {
    "id": 150,
    "title": "Word Search #5",
    "topic": "backtracking",
    "difficulty": "hard",
    "description": "Given an `m x n` `board` of characters and a string `word`. Return the number of times `word` appears in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontally or vertically). The same letter cell may not be used more than once in the same instance of `word`.",
    "sampleInput": "board = [[\"A\",\"A\"],[\"A\",\"A\"]], word = \"AAA\"",
    "sampleOutput": "8"
  }
];

export default neetcode150;

