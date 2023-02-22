import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <Link href="/">/</Link>
      <br />
      <Link href="/a?foo=bar">/a?foo=bar</Link>
      <br />
      <Link href="/a">/a</Link>
      <br />
    </>
  );
}
