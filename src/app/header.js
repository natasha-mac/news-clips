import { AppBar, styled } from "@mui/material";
import Image from "next/image";

const StyledApp = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const Logo = styled("div")({
  margin: "auto",
});

const Header = () => {
  return (
    <StyledApp>
      <Logo>
        <Image src="/Logo.png" width={70} height={70} alt="Logo" />
      </Logo>
    </StyledApp>
  );
};

export default Header;
