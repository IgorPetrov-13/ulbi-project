import { useState } from 'react';
//import './Counter.module.scss'
//import classes from './Counter.module.scss';
import * as classes from './Counter.module.scss';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <div>Counter</div>
      <div className={classes.counter}>{count}</div>
      <div>
        <button className={classes.btn} onClick={() => setCount(count + 1)}>
          PLUS
        </button>
        <button className={classes.btn} onClick={() => setCount(count - 1)}>
          MINUS
        </button>
      </div>
    </section>
  );
}

export default Counter;
