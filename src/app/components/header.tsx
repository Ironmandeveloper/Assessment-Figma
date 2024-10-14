import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/app/public/logo.png";
import CaretDown from "@/app/public/caret-down.png";

const Header = () => {
  return (
    <header className="thm-container">
      <nav className="nav-wrapper">
        <Link href="/">
          <Image
            src={LogoImage}
            alt="Logo"
            width={114}
            height={21}
            priority 
          />
        </Link>
        <ul>
          <li>
            <Link href="/" className="inline-flex items-center justify-center gap-3">
              채용{" "}
              <Image
                src={CaretDown}
                alt="Logo"
                width={24}
                height={24}
                priority 
              />
            </Link>
          </li>
          <li>
            <Link href="/about">해외 개발자 활용 서비스</Link>
          </li>
        </ul>
        <Link href="/" className="btn btn-primary">
          문의하기
        </Link>
      </nav>
    </header>
  );
};

export default Header;
