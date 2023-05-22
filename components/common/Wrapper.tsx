import { FC, PropsWithChildren } from "react";

interface Props {
  title: string;
}

const Wrapper: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <div className="my-20">
      <h3 className="text-xl text-center sm:text-left sm:text-2xl sm:ml-5 mb-5 underline">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default Wrapper;
