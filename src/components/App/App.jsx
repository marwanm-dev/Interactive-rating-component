import tw, { styled, theme } from 'twin.macro';

// Components
import Rating from '../Rating';

const App = () => {
  return (
    <Wrapper>
      <Rating />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`w-full h-[100vh] px-sm bg-very-dark-blue flex justify-center items-center`}
`;

export default App;
