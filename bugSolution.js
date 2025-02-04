```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Add a condition to prevent the infinite loop
    let interval;
    if (count < 10) { 
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [count]);

  return <div>Count: {count}</div>;
}
```