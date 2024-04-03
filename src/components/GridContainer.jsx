import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import ExerciseCard from "./ExcerciseCard";

const GridContainer = () => {
  const exerciseData = [
    [
      {
        imageURL: "/yogapic.jpg",
        title: "Yoga",
        text: "Enhance flexibility and mental clarity through ancient poses and breathing techniques.",
        buttonText: "Learn More",
        link: "/yoga",
      },
      {
        imageURL: "/meditation.jpg",
        title: "Meditation",
        text: "Cultivate mindfulness and reduce stress with inner peace practices.",
        buttonText: "Learn More",
        link: "/meditation",
      },
      {
        imageURL: "/daily.jpg",
        title: "Daily Journaling",
        text: "Reflect on experiences, set goals, and track personal growth daily.",
        buttonText: "Learn More",
        link: "/diary",
      },
    ],
    [
      {
        imageURL: "/grat.png",
        title: "Gratitude Journaling",
        text: "Foster positivity and joy by acknowledging daily blessings.",
        buttonText: "Learn More",
        link: "/gratitude",
      },
      {
        imageURL: "/breathe.jpg",
        title: "Breathing Exercises",
        text: "Manage stress and promote relaxation through mindful breathing techniques.",
        buttonText: "Learn More",
        link: "/breathing",
      },
      {
        imageURL: "/music.jpg",
        title: "Music Therapy",
        text: "Elevate mood and reduce anxiety with the therapeutic power of music.",
        buttonText: "Learn More",
        link: "/music",
      },
    ],
    // [
    //   {
    //     imageURL: "/cbt.png",
    //     title: "CBT Techniques",
    //     text: "Develop resilience and improve problem-solving skills with cognitive-behavioral strategies.",
    //     buttonText: "Learn More",
    //     link: "/cbt",
    //   },
    //   {
    //     imageURL: "/swot.png",
    //     title: "SWOT Analysis",
    //     text: "Gain insights into personal strengths, weaknesses, opportunities, and threats for strategic planning.",
    //     buttonText: "Learn More",
    //     link: "/swot",
    //   },
    //   {
    //     imageURL: "/sleep.jpg",
    //     title: "Sleep Stories",
    //     text: "Drift into relaxation and deep sleep with calming bedtime narratives.",
    //     buttonText: "Learn More",
    //     link: "/sleepstories",
    //   },
    // ],
  ];

  return (
    <MDBContainer className="d-flex justify-content-center" breakpoint="xl">
      <div className="grid-container">
        {exerciseData.map((exerciseRow, rowIndex) => (
          <MDBRow className="mb-3" key={rowIndex}>
            {exerciseRow.map((cardProps, cardIndex) => (
              <div className="col-lg-4 col-md-6 mb-4" key={cardIndex}>
                {" "}
                {/* Larger grid size */}
                <ExerciseCard {...cardProps} />
              </div>
            ))}
          </MDBRow>
        ))}
      </div>
    </MDBContainer>
  );
};

export default GridContainer;
