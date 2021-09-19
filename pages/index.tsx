import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

function Homepage() {
  return (
    <div className={styles.container}>
      {/* <Nav></Nav> */}
      <div className="flex gap-3 overflow-hidden ">
        <Link href="/playQuiz">
          <button
            className="
              bg-indigo-700
              hover:bg-purple-300
              hover:text-gray-800
              text-white
              font-semibold
              
              px-16
              rounded-full
              shadow
              w-full"
          >
            {" "}
            Play Quiz
          </button>
        </Link>
        <Link href="/">
          <button
            className="
        
              bg-indigo-700
              hover:bg-purple-300
              hover:text-gray-800
              text-white
              font-semibold
           
              px-16
              rounded-full
              shadow
              w-full"
          >
            Create your Quiz
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
