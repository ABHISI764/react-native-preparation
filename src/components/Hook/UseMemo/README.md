Q. what is useMemo
Ans .

🔹 Explanation (for Interview)
1. What is useMemo?

useMemo is a React hook that memoizes (remembers) the result of a calculation.

It only recomputes when one of its dependencies changes.

2. Why do we use it?

To optimize performance.

Prevents unnecessary recalculations during re-renders.

Useful for expensive operations (e.g., filtering, sorting, calculations).

3. How does it work in our example?

The sum calculation is heavy.

Without useMemo, it recalculates every time we type in the input.

With useMemo, it only recalculates when numbers array changes.

4. Interview Answer Format

If interviewer asks:
👉 "What is useMemo and when would you use it?"

You can say:

"useMemo is a React hook that caches the result of an expensive calculation and only recomputes when dependencies change. For example, in a React Native app, if I have a list of numbers and I want to calculate their sum, without useMemo the sum would be recalculated on every re-render, even if the numbers didn’t change. Using useMemo ensures the sum is only recalculated when the numbers array updates, improving performance."