import { FC, PropsWithChildren } from "react";

interface Props {
  title: string;
}

const Wrapper: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <>
      <h3 className="mt-20 text-xl text-center sm:text-left sm:text-2xl sm:ml-5 mb-5 font-semibold text-slate-700">
        {title}
      </h3>
      <div className="mb-20 border-slate-300 rounded-lg shadow-lg mx-2 sm:mx-5">
        {children}
      </div>
    </>
  );
};

export default Wrapper;
