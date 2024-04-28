import { AppBar, Toolbar, styled, IconButton } from "@mui/material";
import { Menu, Brightness4, Brightness7 } from "@mui/icons-material";
import Image from "next/image";

const StyledApp = styled(AppBar)`
  background: #fff; /* Default background color */
  height: 70px;
`;

const MenuIcon = styled(Menu)`
  color: #000; /* Default color */
`;

const Logo = styled("div")({
  margin: "auto",
  paddingRight: 70,
});

const ThemeToggle = styled(IconButton)`
  position: absolute;
  top: 12px;
  right: 12px;
`;

const Header = () => {
  return (
    <StyledApp>
      <Toolbar>
        <MenuIcon />
        <Logo>
          <Image src="/Logo.png" width={70} height={70} alt="Logo" />
        </Logo>
      </Toolbar>
    </StyledApp>
  );
};

export default Header;
