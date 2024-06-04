// import { increment, decrement } from './store/actions';
import { Provider, useSelector, useDispatch } from 'react-redux';
import * as actions from "../store/actions";
const CounterComponent = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();
  
    return (
      <div className="flex justify-center items-center space-x-4 my-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="text-2xl font-bold">{count}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    );
  };
  export default CounterComponent;