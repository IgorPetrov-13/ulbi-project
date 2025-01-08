import { useState } from 'react';
import './style.scss'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div>Counter</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>PLUS</button>
      <button onClick={() => setCount(count - 1)}>MINUS</button>
    </section>
  );
}

export default Counter;
