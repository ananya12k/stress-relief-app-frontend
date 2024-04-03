import React from "react";
import DiarySideNavBar from "./DiarySideNavBar";
import NewEntryPage from "./NewEntryPage";

const ShowNewPage = () => {
  return (
    <DiarySideNavBar>
      <NewEntryPage />
    </DiarySideNavBar>
  );
};

export default ShowNewPage;
