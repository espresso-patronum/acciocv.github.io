import React from "react";
import Grid from "@material-ui/core/Grid";
import CenteredImage from "./CenteredImage";
import ProfilePic from "../assets/Resti-Photo.jpg";
import IconsLink from "./IconsLink";

const LeftContainer = () => {
  const icons = [
    {
      name: "linkedin",
      href: "https://id.linkedin.com/in/restiyana-dwi-astuti/"
    },
    { name: "github", href: "https://github.com/restiyanada" },
    { name: "google", href: "mailto:restiyana.dwi@gmail.com" }
  ];

  return (
    <Grid item xs={4} className="left-container">
      <CenteredImage image={ProfilePic} />
      <IconsLink links={icons} />
    </Grid>
  );
};

export default LeftContainer;
