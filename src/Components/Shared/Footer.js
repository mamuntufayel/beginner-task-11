import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <p className="text-center text-primary">
        <small>copyright &copy; {year}</small>
      </p>
    </div>
  );
};

export default Footer;
<h3>This is footer</h3>;
