import tw, { styled } from 'twin.macro';
import card from '../../animations/card';
import { motion } from 'framer-motion';

const ThankYou = ({ selectedOption }) => {
  return (
    <Wrapper variants={card} initial='hidden' animate='shown' exit='exit'>
      <Illustration />
      <RateSelection>You selected {selectedOption} out of 5</RateSelection>
      <Heading>Thank you!</Heading>
      <Desc>
        We appreciate you taking the time to give a rating. If you ever need more support, don't
        hesitate to get in touch!
      </Desc>
    </Wrapper>
  );
};

const Wrapper = tw(motion.div)`text-center space-y-xmd`;

const RateSelection = tw.div`text-orange bg-dark-blue w-max mx-auto rounded-full px-4 py-1`;

const Illustration = styled.img.attrs({
  src: '../../assets/images/illustration-thank-you.svg',
})`
  ${tw`mx-auto`}
`;

const Heading = tw.h1`text-white`;

const Desc = tw.p`text-light-grey`;

export default ThankYou;
