import tw, { styled } from 'twin.macro';
import card from '/src/animations/card';
import option from '/src/animations/option';
import { motion } from 'framer-motion';

const Rate = ({ setIsRating, selectedOption, setSelectedOption }) => {
  const handleClick = () => selectedOption && setIsRating(false);
  const handleSelection = e => setSelectedOption(e.target.getAttribute('data-key'));

  return (
    <Wrapper variants={card} initial='hidden' animate='shown' exit='exit'>
      <Logo>
        <Img />
      </Logo>
      <Heading>How did we do?</Heading>
      <Desc>
        Please let us know we did with your support request. All feedback is appreciated to help use
        improve our offering!
      </Desc>
      <Options>
        {[1, 2, 3, 4, 5].map((num, i) => (
          <Option
            variants={option}
            custom={i}
            initial='hidden'
            animate='shown'
            exit='exit'
            onClick={handleSelection}
            key={num}
            data-key={num}
            selected={num == selectedOption}>
            {num}
          </Option>
        ))}
      </Options>
      <Submit onClick={handleClick}>Submit</Submit>
    </Wrapper>
  );
};

const Wrapper = tw(motion.div)`flex flex-col justify-between items-start gap-xmd`;

const Logo = tw.div`w-12 h-12 rounded-full bg-med-blue flex justify-center items-center`;

const Img = styled.img.attrs({
  src: '../../assets/images/icon-star.svg',
})``;

const Heading = tw.h1`text-white`;
const Desc = tw.p`text-light-grey`;

const Options = tw.div`flex justify-between items-center gap-sm max-w-full`;

const Option = styled(motion.button)`
  ${tw`w-14 h-14 bg-med-blue text-light-grey font-bold rounded-full flex justify-center items-center hover:(text-white bg-light-grey)`}
  ${({ selected }) => selected && tw`bg-orange text-white hover:bg-orange`}
`;

const Submit = styled.button`
  ${tw`w-full py-xsm text-center bg-orange text-white font-bold rounded-full tracking-widest hover:(text-orange bg-white)`}
`;

export default Rate;
