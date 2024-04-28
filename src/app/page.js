"use client";

import { Box, styled } from "@mui/material";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import jsonData from "./data.json";
import { useState, useEffect } from "react";
import Header from "./header";

const ContainerBox = styled(Box)(({ theme }) => ({
  width: "59%",
  margin: "110px auto 0 auto",
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

const Component = styled(Card)`
  box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
  margin-bottom: 20px;
`;

const Container = styled(CardContent)`
  display: flex;
  padding: 8px;
  padding-bottom: 4px !important;
`;

const Image = styled("img")({
  height: 268,
  width: "88%",
  borderRadius: 5,
  objectFit: "cover",
});

const RightContainer = styled(Grid)(({ theme }) => ({
  margin: "5px 0px 0 -25px",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.between("sm", "lg")]: {
    padding: "0 5px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "5px 0",
  },
}));

const Title = styled(Typography)`
  font-weight: 300;
  color: #44444d;
  font-size: 22px;
  line-height: 27px;
`;

const Author = styled(Typography)`
  color: #808290;
  font-size: 12px;
  line-height: 22px;
`;

const Description = styled(Typography)`
  line-height: 22px;
  color: #44444d;
  margin-top: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

const Short = styled("b")({
  color: "#44444d",
  fontFamily: "'Convergence', sans-serif",
});

const Publisher = styled(Typography)`
  font-size: 12px;
  margin-top: auto;
  margin-bottom: 10px;
  '& > *': {
      textDecoration: 'none',
      color: '#000',
      fontWeight: 900
  }
`;

function App() {
  const [articleData, setArticleData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setArticleData(jsonData);
      setLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!articleData) return <p>Article Not Available</p>;

  return (
    <Box>
      <Header />
      <ContainerBox>
        {articleData.map((article) => (
          <Component key={article.id}>
            <Container>
              <Grid container>
                <Grid lg={5} md={5} sm={5} xs={12} item>
                  <Image src={article.image_url} />
                </Grid>
                <RightContainer lg={7} md={7} sm={7} xs={12} item>
                  <Title>{article.title}</Title>
                  <Author>
                    <Short>news clip</Short> by {article.author}, Date:{" "}
                    {article.date}
                  </Author>
                  <Description>{article.content}</Description>
                  <Publisher>
                    read more at{" "}
                    <a href={article.source} target="_blank">
                      {article.source}
                    </a>
                  </Publisher>
                </RightContainer>
              </Grid>
            </Container>
          </Component>
        ))}
      </ContainerBox>
    </Box>
  );
}

export default App;
