// Q. what is userRef
// Ans. 

useRef is a React Hook that allows you to persist values across renders without causing re-renders.
It creates a mutable object with a .current property that you can read or update directly.

Key Points to Say in Interview

1. Does not cause re-render when updated (unlike useState).

2. Persists values between renders (like an instance variable in a class).

3. Commonly used for referencing DOM/React Native elements (TextInput, View, etc.).

4. Can be used as a container for storing any mutable value (interval IDs, previous state, counters, etc.).