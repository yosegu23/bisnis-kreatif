import Image from "next/image";

interface PropsI {
  width: number;
  height: number;
  className?: string;
  [key: string]: any;
}

const Logo = ({ width, height, className, ...rest }: PropsI) => {
  return (
    <div className={className}>
      <Image
        src="/asset/images/logo_bisnis.png"
        alt="logo"
        width={width}
        height={height}
        {...rest}
      />
    </div>
  );
};

export default Logo;
