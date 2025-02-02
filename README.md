# Firebase onAuthStateChanged Memory Leak
This example demonstrates a common issue with Firebase's `onAuthStateChanged` function: memory leaks due to forgetting to unsubscribe from the listener.  The `authBug.js` file shows the problematic code, while `authBugSolution.js` provides the corrected version.

## Problem
The `onAuthStateChanged` listener remains active even after the component using it unmounts, potentially leading to memory leaks if not properly handled. This is especially critical in React applications. 

## Solution
To fix this, ensure you call the `unsubscribe()` function when the component unmounts or when you no longer need to track authentication state changes.  The `authBugSolution.js` file shows how to correctly manage the subscription using the `useEffect` hook in React to clean up after the component is unmounted.  This ensures resources are released, preventing memory leaks. 