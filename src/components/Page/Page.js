import React, { useEffect } from "react";
import { PageWrapper, PageContent, Img, PageContainer } from "./PageElements";


const Page = ({ img, header, text }) => {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <PageContainer>
      <PageWrapper>
        <PageContent>
          <Img src={img} />
          <h2>{header}</h2>
          <hr />
          {text}
        </PageContent>
      </PageWrapper>
    </PageContainer>
  );
};

export default Page;
