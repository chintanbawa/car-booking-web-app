import { useState } from "react";
import {
  Container,
  FirstContainer,
  HeadingText,
  SecondContainer,
  HomeCarImage,
  SubHeadingText,
  InfoText,
  BookACarButton,
} from "./HomeElements";

import HomeCarImg from "../../assets/images/home-car.png";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

const Home = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Container>
      <FirstContainer>
        <HeadingText>CAR BOOKING</HeadingText>
        <SubHeadingText>CAR BOOKING WAS NEVER SO EASY!!</SubHeadingText>
        <InfoText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </InfoText>

        <BookACarButton
          to='/cars'
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          Book a Car
          {isHover ? (
            <MdArrowForward size='2rem' style={{ marginLeft: 5 }} />
          ) : (
            <MdKeyboardArrowRight size='2rem' style={{ marginLeft: 8 }} />
          )}
        </BookACarButton>
      </FirstContainer>
      <SecondContainer>
        <HomeCarImage src={HomeCarImg} alt='Home Car' />
      </SecondContainer>
    </Container>
  );
};

export default Home;
