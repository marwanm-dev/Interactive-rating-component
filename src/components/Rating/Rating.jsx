import { useState } from 'react';
import tw from 'twin.macro';
import Rate from './Rate';
import ThankYou from './ThankYou';
import { motion } from 'framer-motion';

const Rating = () => {
  const [isRating, setIsRating] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Wrapper initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
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

const Wrapper = tw(
  motion.div
)`overflow-hidden w-rating h-rating rounded-lg p-md bg-gradient-to-b from-dark-blue to-very-dark-blue max-w-full
`;

export default Rating;
