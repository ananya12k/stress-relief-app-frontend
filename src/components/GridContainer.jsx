import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ExerciseCard from "./ExcersiseCard";

const GridContainer = () => {
  return (
    <MDBContainer className="d-flex justify-content-center" breakpoint="xl">
      <div className="grid-container">
        <MDBRow className="mb-3">
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
        </MDBRow>

        <MDBRow className="mb-3">
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
        </MDBRow>

        <MDBRow className="mb-3">
          <ExerciseCard />
          <ExerciseCard />
          <ExerciseCard />
        </MDBRow>
      </div>
    </MDBContainer>
  );
};

export default GridContainer;
