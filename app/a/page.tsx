import { notFound, redirect } from "next/navigation";

export default function Page() {
  notFound();
  redirect("/");
}
