import tw, { styled } from 'twin.macro';

const Rate = ({ setIsRating, selectedOption, setSelectedOption }) => {
  const handleClick = () => setIsRating(false);
  const handleSelection = e => setSelectedOption(e.target.getAttribute('data-key'));

  return (
    <Wrapper>
      <Logo>
        <Img />
      </Logo>
      <Heading>How did we do?</Heading>
      <Desc>
        Please let us know we did with your support request. All feedback is appreciated to help use
        improve our offering!
      </Desc>
      <Options>
        {[1, 2, 3, 4, 5].map(num => (
          <Option
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

const Wrapper = tw.div`flex flex-col justify-between items-start gap-xmd`;

const Logo = tw.div`w-12 h-12 rounded-full bg-med-blue flex justify-center items-center`;

const Img = styled.img.attrs({
  src: '../../assets/images/icon-star.svg',
})``;

const Heading = tw.h1`text-white`;
const Desc = tw.p`text-light-grey`;

const Options = styled.div`
  ${tw`flex justify-between items-center gap-sm max-w-full`}
`;

const Option = styled.button`
  ${tw`w-14 h-14 bg-med-blue text-light-grey font-bold rounded-full flex justify-center items-center hover:(text-white bg-light-grey)`}
  ${({ selected }) => selected && tw`bg-orange text-white hover:bg-orange`}
`;

const Submit = styled.button`
  ${tw`w-full py-xsm text-center bg-orange text-white font-bold rounded-full tracking-widest hover:(text-orange bg-white)`}
`;

export default Rate;
