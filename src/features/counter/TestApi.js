import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { apiGET, getApiResource } from "../../redux/slices/apiSlice";
import styles from "./Counter.module.css";

const TestApi = () => {
  const users = useSelector((state) => getApiResource(state, "1"));
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Test"
          onClick={() => dispatch(apiGET("1"))}
        >
          Test Api
        </button>
      </div>
    </div>
  );
};

export default TestApi;
