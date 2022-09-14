// import styles from './index.module.scss'
import React from "react";
import { ENDPOINTS } from "../../api/endpoints.js";
import { useFetch } from "../..//api/use-fetch.js";
import CategoryList from "../../components/CategoryList";
import styles from "./index.module.scss";
export const Home = () => {
  // eslint-disable-next-line
  const { data, loading, error } = useFetch(ENDPOINTS.CATEGORIES);

  if (loading) {
    return "Loading...";
  }

  return (
    <div className={styles.ClassContainer}>
      {data ? (
        <CategoryList categories={data?.categories ?? []} />
      ) : (
        "Si è verificato un errore!"
      )}
    </div>
  );
};

export default Home;
