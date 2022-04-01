import { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Rate from './Rate';
import ThankYou from './ThankYou';

const Rating = () => {
  const [isRating, setIsRating] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Wrapper>
      {isRating ? (
        <Rate
          setIsRating={setIsRating}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      ) : (
        <ThankYou selectedOption={selectedOption} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${tw`w-rating h-rating rounded-lg p-md bg-gradient-to-b from-dark-blue to-very-dark-blue max-w-full`}
`;

export default Rating;
