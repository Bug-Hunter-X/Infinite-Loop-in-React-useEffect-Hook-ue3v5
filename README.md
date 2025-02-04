# React useEffect Infinite Loop Bug

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug causes an infinite loop, resulting in performance issues or crashes.

## Bug Description

The `useEffect` hook is improperly used, creating a dependency on `count`.  Each time `count` updates, the effect runs again, incrementing `count` and restarting the cycle.