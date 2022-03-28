import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <img src="/images/profile.jpg" alt="Your Name" />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
