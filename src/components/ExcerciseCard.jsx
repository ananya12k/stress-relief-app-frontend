import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function ExerciseCard({
  imageURL,
  title,
  text,
  buttonText,
  link,
}) {
  return (
    <MDBCard>
      <MDBCardImage src={imageURL} position="top" alt="Exercise Image" />
      <MDBCardBody style={{ height: "200px", overflow: "hidden" }}>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText style={{ maxHeight: "80px", overflow: "hidden" }}>
          {text}
        </MDBCardText>
        <MDBBtn href={link}>{buttonText}</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
