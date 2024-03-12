import GridContainer from "../components/GridContainer";
import NavBar from "../components/NavBar";

const ExercisesPage = () => {
  return (
    <>
      <NavBar />
      {/* Grid containers goes little behind navbar, so to correct it */}
      <div style={{ marginTop: "100px" }}>
        {" "}
        <GridContainer />
      </div>
    </>
  );
};

export default ExercisesPage;
