import { BookButton, CarDescription, CarImage, CarInfoContainer, CarName, CarNameContainer, Container, GridItem } from "./CarsElements";

const cars = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Cars = () => {
  return (
    <Container>
      {cars.map(num =>
        <GridItem key={num.toString()}>
          <CarImage src={num % 2 === 0 ? 'https://5.imimg.com/data5/IQ/WF/OC/ANDROID-6873479/product-jpeg-500x500.jpg' : 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt='Car Image' />
          <CarInfoContainer>
            <CarNameContainer>
              <CarName>Car {num}</CarName>
              <BookButton>Book Now</BookButton>
            </CarNameContainer>
            <CarDescription>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.</CarDescription>
          </CarInfoContainer>
        </GridItem>)
      }
    </Container>
  )
};

export default Cars;
