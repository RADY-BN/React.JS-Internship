import React from "react";
import { ButtonR } from "../ButtonElement";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  BtnWrap,
  Subtitle,
  Heading,
  TextWrapper,
  TopLine,
  ImgWrap,
  Img,
} from "./InfoSectionRElements";
const InfoSectionR = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  lightTextDesc,
  description,
  buttonLable,
  img,
  alt,
  primary,
  dark,
  dark2,
  add,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={lightTextDesc}>{description}</Subtitle>
                <BtnWrap>
                  <ButtonR
                    to={add}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLable}
                  </ButtonR>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSectionR;
