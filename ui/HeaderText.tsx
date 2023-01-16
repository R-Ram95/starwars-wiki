import { FunctionComponent } from "react";

const HeaderText: FunctionComponent<any> = ({ children, classes }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return <h1 className="text-5xl font-bold text-gray-100">{children}</h1>;
};
export default HeaderText;
