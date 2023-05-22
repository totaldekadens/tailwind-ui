import { FC, PropsWithChildren } from "react";
import Header from "./Header";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center mt-10 min-h-screen">
        {children}
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
