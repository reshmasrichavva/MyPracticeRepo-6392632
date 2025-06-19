

## Objective

Develop a financial forecasting solution that predicts future values using recursion based on past data and a fixed annual growth rate.

## Understanding Recursive Algorithms

Recursion is a technique where a function calls itself to solve a smaller part of the same problem. It’s useful for problems that repeat similar steps like calculating future values year after year.

In this case, recursion helps apply the growth rate repeatedly, reducing the number of years at each step until it reaches the base case (year = 0). This makes the logic easier to understand and more elegant than writing multiple loops manually.


## Time and Space Complexity

### Time Complexity

The recursive function runs once for every year being calculated, so the time complexity is:O(n), where n = number of years

Each call processes one year’s growth.

### Space Complexity
O(n)

Each recursive call adds a new layer to the call stack, which takes up memory. The deeper the recursion, the more space it uses.

## Optimization

For small values of `n` (e.g. < 50), recursion is fine. However, for large values:

- **Prefer iteration** to avoid stack overflow
Or **use memoization** if similar subproblems are being recomputed

An iterative approach does the same work without building up the call stack, making it more efficient and safer for larger datasets.


## Summary

- Recursion simplifies repetitive forecasting logic
- It’s elegant but can become inefficient for large inputs
- For long-term forecasting, an iterative version is recommended


