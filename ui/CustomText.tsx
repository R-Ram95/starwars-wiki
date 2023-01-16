import { FunctionComponent } from "react";

interface CustomTextProps {
  children: React.ReactNode;
  className: string;
}

const CustomText: FunctionComponent<any> = ({
  children,
  className,
}: CustomTextProps) => {
  function classNames(...additionalClassName: string[]) {
    return additionalClassName.join(" ");
  }

  return (
    <h1 className={classNames("text-yellow-300", className)}>{children}</h1>
  );
};
export default CustomText;
