import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import Link from "next/link";
import { useCart } from '../context/CartContext'; 


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 50,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.8),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  color: theme.palette.common.black,
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  height: 40,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "80ch",
    },
    boxSizing: "border-box",
  },
}));

export default function PrimarySearchAppBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const [displayText, setDisplayText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);


  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  // Move 'phrases' inside the useEffect callback
  React.useEffect(() => {
    const phrases = [
      "💻ค้นหาโน้ตบุ๊ก",
      "⌨️ค้นหาอุปกรณ์เกมมิ่ง",
      "🖱️ค้นหาเมาส์ไร้สาย",
      "🖥️ค้นหาจอ 144Hz",
    ];

    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentPhrase.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);

          if (charIndex + 1 === currentPhrase.length) {
            setIsDeleting(true);
          }
        } else {
          setDisplayText(currentPhrase.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 50 : 120
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(to right, #221692, #1A1354)",
          height: 40,
        }}
      >
        <Toolbar
          sx={{
            minHeight: 40,
            paddingBottom: { xs: 0, md: 3 },
            paddingLeft: 1,
            paddingRight: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: { xs: "nowrap", md: "nowrap" },
            overflowX: { xs: "auto", md: "visible" },
          }}
        >
          {/* ซ้าย */}
          <Box sx={{ display: "flex", alignItems: "start", flexGrow: 1 }}>
            <IconButton
            href="/"
              size="small"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <Image src="/images/menu.svg" alt="Logo" width={24} height={24} />
            </IconButton>
          </Box>

          {/* กลาง */}
          <Box
            sx={{
              flexGrow: 5,
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              minWidth: 0,
            }}
          >
            <Image
              src="/images/logo-jib.svg"
              alt="Logo"
              width={35}
              height={30}
            />

            <Search
              sx={{
                height: 24,
                width: { xs: "100%", sm: "auto" },
                flexGrow: 1,
                maxWidth: "80%",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon fontSize="small" sx={{ fontSize: "1rem" }} />
              </SearchIconWrapper>
              <StyledInputBase
                value={displayText}
                placeholder=""
                inputProps={{ "aria-label": "search" }}
                sx={{
                  color: "black ",
                  height: "20px",
                  fontSize: "0.55rem",
                  "& .MuiInputBase-input": {
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                }}
              />
            </Search>

            <IconButton size="small" aria-label="favorites" color="inherit">
              <Badge
                badgeContent={"99+"}
                
                sx={{
                  
                  position: "relative", // ทำให้ Badge อยู่ในตำแหน่งที่ควบคุมได้
                  "& .MuiBadge-badge": {
                    fontSize: "0.4rem", // ขนาดตัวอักษรของ badge
                    width: 12,
                    height: 10,
                    position: "absolute", // ให้ตัวเลขอยู่ในตำแหน่งที่ต้องการ
                    bottom: -5, // เลื่อนตัวเลขลงมาด้านล่าง
                    backgroundColor: "#FFA500", // ตั้งค่าสีส้ม
                    color: "#fff", // สีตัวเลขภายใน badge เป็นสีขาว
                    transform: "translate(20%, 100%)", // ขยับให้อยู่ใต้ไอคอน
                  },
                }}
              >
                <FavoriteBorderIcon
                  fontSize="small"
                  sx={{ fontSize: "1.50rem" }}
                />
              </Badge>
            </IconButton>
            <IconButton size="small" aria-label="cart" color="inherit">
              <Badge
                badgeContent={totalItems}
                component={Link}
                href="/cart-summary"
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    fontSize: "0.4rem", // ขนาดตัวอักษรของ badge
                    width: 12,
                    height: 10,
                    position: "absolute", // ให้ตัวเลขอยู่ในตำแหน่งที่ต้องการ
                    bottom: -5, // เลื่อนตัวเลขลงมาด้านล่าง
                    backgroundColor: "#FFA500", // ตั้งค่าสีส้ม
                    color: "#fff", // สีตัวเลขภายใน badge เป็นสีขาว
                    transform: "translate(20%, 100%)", // ขยับให้อยู่ใต้ไอคอน
                  },
                }}
              >
                <ShoppingCartOutlinedIcon
                  fontSize="small"
                  sx={{ fontSize: "1.50rem" }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle fontSize="small" sx={{ fontSize: "1.50rem" }} />
            </IconButton>
          </Box>

          {/* ขวา */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          ></Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
