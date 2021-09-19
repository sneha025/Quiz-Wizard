import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import NavBar from "./navbar";
interface IProps {
  children: ReactNode;
}
const Layout = ({ children }: IProps) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
