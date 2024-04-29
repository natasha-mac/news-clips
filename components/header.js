import { AppBar, styled } from "@mui/material";
import Image from "next/image";

const Title = styled(AppBar)`
  background: #212121;
  height: 70px;
`;

const Logo = styled("div")({
  margin: "auto",
});

const Header = () => {
  return (
    <Title>
      <Logo>
        <Image src="/Logo.png" width={70} height={70} alt="Logo" />
      </Logo>
    </Title>
  );
};

export default Header;
