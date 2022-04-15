import * as icons from "lucide-react";
import { LucideProps } from "lucide-react";

interface Props extends LucideProps {
  name: string;
  color: string;
  size: number;
}

const Icon = ({ name, color, size, ...rest }: Props) => {
  // @ts-ignore
  const LucideIcon = icons[name];

  if (LucideIcon === undefined) {
    return <></>;
  }
  return <LucideIcon color={color} size={size} {...rest} />;
};

export default Icon;
