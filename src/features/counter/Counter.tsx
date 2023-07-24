import React from "react";
import type { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByTwo } from "./counterSlice";
import {
  useGetPokimonDataQuery,
  useGetTodoDataQuery,
} from "../../services/CounterApi";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function Counter() {
  // hooks
  const interval = 5000;

  const count = useSelector((state: RootState) => state.counter.value);
  const {
    data: todos,
    isLoading: todoLoading,
    error: todoError,
  } = useGetTodoDataQuery(undefined, {
    pollingInterval: interval,
  });
  if (todoLoading) return <div>Loading</div>;
  if (todoError) return <div>Error occurred</div>;
  const todo: any = todos;

  const { data, isLoading, error } = useGetPokimonDataQuery(undefined, {
    pollingInterval: interval,
  });
  if (isLoading) return <>loading</>;
  if (error) return <>Error Occured</>;
  const pokimon: any = data;

  const dispatch = useDispatch();
  return (
    <div>
      <div>{todos ? `title = ${todos.title}` : null}</div>
      <div>{pokimon ? `name = ${pokimon.name}` : null}</div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          aria-label="by 2"
          onClick={() => {
            dispatch(incrementByTwo());
          }}
        >
          by 2
        </button>
      </div>
    </div>
  );
}

export default Counter;
