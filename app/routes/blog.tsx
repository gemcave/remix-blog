import styles from "highlight.js/styles/lightfair.css";
import { LinksFunction, Outlet } from "remix";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Blog() {
  return <Outlet />;
}
