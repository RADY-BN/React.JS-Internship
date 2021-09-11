import styled from "styled-components";
export const PageContainer = styled.div`
  background: radial-gradient(#007545, #69ffc1);
  display: flex;
  position: sticky;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @media screen and (min-width: 650px) {
    position: absolute;
    display: block;
  }
`;
export const PageWrapper = styled.div`
  background-color: #1b382c;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 900px;
  border-radius: 40px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 100px;
  @media screen and (max-width: 650px) {
    width: 90%;
    min-width: 400px;
  }
`;

export const PageContent = styled.p`
  background-color: #fcfcfc;
  width: 97.5%;
  margin: 10px auto;
  height: auto;
  border-radius: 35px;
  padding: 15px;
  text-align: justify;
  padding: auto;
  font-size: 18px;
  line-height: 1.2;

  & h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #01bf71;
  }
  & hr {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 650px) {
    width: 95%;
    display: flex;
    flex-direction: column;

    & h2 {
      text-align: center;
    }
  }
`;
export const Img = styled.img`
  background-color: transparent;
  width: 250px;
  height: 250px;
  margin-left: 20px;
  float: right;
  border-left: 1px dotted gray;
  border-bottom: 1px dotted gray;
  @media screen and (max-width: 650px) {
    border: none;
    float: none;
    margin: 0 auto;
  }
`;
