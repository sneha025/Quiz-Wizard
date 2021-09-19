import React from "react";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "next/link";

function Homepage() {
  return (
    <div className={styles.container}>
      {/* <Nav></Nav> */}
      <Stack spacing={2} direction="row">
        <Link href="/playQuiz">
          <Button variant="contained"> Play Quiz</Button>
        </Link>
        <Link href="/">
          <Button variant="contained">Create your Quiz</Button>
        </Link>
      </Stack>
    </div>
  );
}

export default Homepage;
