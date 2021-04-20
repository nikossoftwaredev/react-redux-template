import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiGET, getApiResource } from "../../redux/slices/apiSlice";
import styles from "./Counter.module.css";

const TestApi = () => {
  const todos = useSelector((state) => getApiResource(state, "todos"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGET("todos"));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.row}>
        {console.log(todos)}
        {todos && todos.status === "done" && todos.data ? (
          <div>
            {Object.values(todos.data).map((todo) => (
              <p id={todo.id}>{todo.title}</p>
            ))}
          </div>
        ) : (
          <div>Fetching...</div>
        )}
      </div>
    </div>
  );
};

export default TestApi;
