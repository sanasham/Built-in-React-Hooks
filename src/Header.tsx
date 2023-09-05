import React from "react";

interface HeaderProps {
  label: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  const { label } = props;
  console.log("Header");
  return <h2 style={{ textAlign: "center" }}>{label}</h2>;
};

export default Header;
