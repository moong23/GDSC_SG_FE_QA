import Link from "next/link";

interface ButtonWithHrefLinkProps extends React.PropsWithChildren {
  hrefLink: string;
  className?: string;
}

const ButtonWithHrefLink = ({ children, hrefLink, className }: ButtonWithHrefLinkProps) => {
  return (
    <Link href={hrefLink} target="_blank" className={`${className} bg-gdsc-Black text-center rounded-full px-[26px] py-[18px] text-gdsc-White text-[20px] w-fit border border-gdsc-White hover:bg-gdsc-White hover:border-gdsc-Black hover:text-gdsc-Black transition-colors`}>
      {children}
    </Link>
  );
}
export default ButtonWithHrefLink;