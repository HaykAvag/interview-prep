export default [
    {
        title: "Two Sum",
        description:
            "Find two numbers in an array that add up to a target value.",
        code: "function twoSum(nums, target) {\n    const map = new Map();\n    for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (map.has(complement)) {\n            return [map.get(complement), i];\n        }\n        map.set(nums[i], i);\n    }\n    return [];\n}",
        hint: "Use a hash map to keep track of the indices of the numbers you have seen so far."
    },
    {
        title: "Reverse String",
        description: "Reverse a given string.",
        code: "function reverseString(str) {\n    return str.split('').reverse().join('');\n}",
        hint: "You can convert the string to an array, reverse it, and join it back into a string."
    },
    {
        title: "Palindrome Check",
        description: "Check if a given string is a palindrome.",
        code: "function isPalindrome(s) {\n    const cleanStr = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();\n    return cleanStr === cleanStr.split('').reverse().join('');\n}",
        hint: "Clean the string to remove non-alphanumeric characters and check if it's equal to its reverse."
    },
    {
        title: "Merge Two Sorted Arrays",
        description: "Merge two sorted arrays into one sorted array.",
        code: "function mergeSortedArrays(arr1, arr2) {\n    let result = [], i = 0, j = 0;\n    while (i < arr1.length && j < arr2.length) {\n        if (arr1[i] < arr2[j]) result.push(arr1[i++]);\n        else result.push(arr2[j++]);\n    }\n    return result.concat(arr1.slice(i)).concat(arr2.slice(j));\n}",
        hint: "Use two pointers to compare elements from both arrays and merge them."
    },
    {
        title: "Fibonacci Sequence",
        description: "Return the nth number in the Fibonacci sequence.",
        code: "function fibonacci(n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}",
        hint: "The nth Fibonacci number is the sum of the (n-1)th and (n-2)th numbers."
    },
    {
        title: "Factorial",
        description: "Return the factorial of a given number.",
        code: "function factorial(n) {\n    return n === 0 ? 1 : n * factorial(n - 1);\n}",
        hint: "Use recursion to calculate the product of all numbers from n to 1."
    },
    {
        title: "Max Subarray",
        description: "Find the contiguous subarray with the largest sum.",
        code: "function maxSubArray(nums) {\n    let maxSoFar = nums[0], currentMax = nums[0];\n    for (let i = 1; i < nums.length; i++) {\n        currentMax = Math.max(nums[i], currentMax + nums[i]);\n        maxSoFar = Math.max(maxSoFar, currentMax);\n    }\n    return maxSoFar;\n}",
        hint: "Use a dynamic programming approach to track the current maximum subarray."
    },
    {
        title: "Climbing Stairs",
        description:
            "You can either climb 1 or 2 steps at a time. How many distinct ways can you climb to the top?",
        code: "function climbStairs(n) {\n    if (n <= 2) return n;\n    let a = 1, b = 2;\n    for (let i = 3; i <= n; i++) {\n        [a, b] = [b, a + b];\n    }\n    return b;\n}",
        hint: "The problem is similar to the Fibonacci sequence."
    },
    {
        title: "Valid Parentheses",
        description:
            "Check if a string containing only '(', ')', '{', '}', '[' and ']' is valid.",
        code: "function isValid(s) {\n    const stack = [], map = { '(': ')', '[': ']', '{': '}' };\n    for (let char of s) {\n        if (map[char]) stack.push(map[char]);\n        else if (stack.length === 0 || stack.pop() !== char) return false;\n    }\n    return stack.length === 0;\n}",
        hint: "Use a stack to keep track of the parentheses and check if they close correctly."
    },
    {
        title: "Binary Search",
        description:
            "Implement binary search to find a target value in a sorted array.",
        code: "function binarySearch(nums, target) {\n    let left = 0, right = nums.length - 1;\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2);\n        if (nums[mid] === target) return mid;\n        else if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}",
        hint: "Divide the search space by half with each iteration until the target is found."
    },
    {
        title: "Move Zeroes",
        description:
            "Move all zeroes in an array to the end while maintaining the relative order of non-zero elements.",
        code: "function moveZeroes(nums) {\n    let index = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (nums[i] !== 0) nums[index++] = nums[i];\n    }\n    for (let i = index; i < nums.length; i++) {\n        nums[i] = 0;\n    }\n}",
        hint: "Use a pointer to track non-zero elements and fill remaining indices with zeroes."
    },
    {
        title: "Find First Unique Character",
        description: "Find the first non-repeating character in a string.",
        code: "function firstUniqChar(s) {\n    const count = new Map();\n    for (let char of s) {\n        count.set(char, (count.get(char) || 0) + 1);\n    }\n    for (let i = 0; i < s.length; i++) {\n        if (count.get(s[i]) === 1) return i;\n    }\n    return -1;\n}",
        hint: "Use a map to count occurrences of characters and find the first one with count 1."
    },
    {
        title: "Longest Common Prefix",
        description: "Find the longest common prefix among a list of strings.",
        code: "function longestCommonPrefix(strs) {\n    if (!strs.length) return '';\n    let prefix = strs[0];\n    for (let i = 1; i < strs.length; i++) {\n        while (strs[i].indexOf(prefix) !== 0) {\n            prefix = prefix.slice(0, -1);\n            if (!prefix) return '';\n        }\n    }\n    return prefix;\n}",
        hint: "Iterate through each string and shorten the prefix until it matches the start of each string."
    },
    {
        title: "Remove Duplicates from Sorted Array",
        description:
            "Remove duplicates in place from a sorted array and return the new length.",
        code: "function removeDuplicates(nums) {\n    if (nums.length === 0) return 0;\n    let i = 0;\n    for (let j = 1; j < nums.length; j++) {\n        if (nums[j] !== nums[i]) {\n            i++;\n            nums[i] = nums[j];\n        }\n    }\n    return i + 1;\n}",
        hint: "Use two pointers to track unique elements and overwrite duplicates."
    },
    {
        title: "Product of Array Except Self",
        description:
            "Return an array such that each element at index i is the product of all the numbers in the original array except the one at i.",
        code: "function productExceptSelf(nums) {\n    let output = Array(nums.length).fill(1);\n    let left = 1, right = 1;\n    for (let i = 0; i < nums.length; i++) {\n        output[i] *= left;\n        left *= nums[i];\n    }\n    for (let i = nums.length - 1; i >= 0; i--) {\n        output[i] *= right;\n        right *= nums[i];\n    }\n    return output;\n}",
        hint: "Use two passes: one for the left product and one for the right product."
    },
    {
        title: "Minimum Depth of Binary Tree",
        description: "Find the minimum depth of a binary tree.",
        code: "function minDepth(root) {\n    if (!root) return 0;\n    if (!root.left) return minDepth(root.right) + 1;\n    if (!root.right) return minDepth(root.left) + 1;\n    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;\n}",
        hint: "Use recursion to find the minimum depth by exploring both left and right subtrees."
    },
    {
        title: "Merge Intervals",
        description: "Merge all overlapping intervals.",
        code: "function merge(intervals) {\n    intervals.sort((a, b) => a[0] - b[0]);\n    const result = [intervals[0]];\n    for (let i = 1; i < intervals.length; i++) {\n        let prev = result[result.length - 1];\n        if (prev[1] >= intervals[i][0]) prev[1] = Math.max(prev[1], intervals[i][1]);\n        else result.push(intervals[i]);\n    }\n    return result;\n}",
        hint: "Sort the intervals and merge those that overlap."
    },
    {
        title: "Rotated Sorted Array Search",
        description: "Search for a target value in a rotated sorted array.",
        code: "function search(nums, target) {\n    let left = 0, right = nums.length - 1;\n    while (left <= right) {\n        let mid = Math.floor((left + right) / 2);\n        if (nums[mid] === target) return mid;\n        if (nums[left] <= nums[mid]) {\n            if (target >= nums[left] && target < nums[mid]) right = mid - 1;\n            else left = mid + 1;\n        } else {\n            if (target > nums[mid] && target <= nums[right]) left = mid + 1;\n            else right = mid - 1;\n        }\n    }\n    return -1;\n}",
        hint: "Use binary search, but account for the rotation in the array."
    },
    {
        title: "Count Primes",
        description:
            "Count the number of prime numbers less than a given number n.",
        code: "function countPrimes(n) {\n    const isPrime = Array(n).fill(true);\n    isPrime[0] = isPrime[1] = false;\n    for (let i = 2; i * i < n; i++) {\n        if (isPrime[i]) {\n            for (let j = i * i; j < n; j += i) isPrime[j] = false;\n        }\n    }\n    return isPrime.filter(p => p).length;\n}",
        hint: "Use the Sieve of Eratosthenes to mark non-prime numbers."
    },
    {
        title: "Coin Change",
        description:
            "Given coins of different denominations and a total amount, find the fewest number of coins needed to make up that amount.",
        code: "function coinChange(coins, amount) {\n    const dp = Array(amount + 1).fill(Infinity);\n    dp[0] = 0;\n    for (let coin of coins) {\n        for (let i = coin; i <= amount; i++) {\n            dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] === Infinity ? -1 : dp[amount];\n}",
        hint: "Use dynamic programming to build up the solution incrementally."
    }
];
