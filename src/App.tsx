import React, { useContext, useState, useRef, useEffect } from "react";
import GlobalStyle from "./theme/globalStyle";
import logo from "./images/logo.png";
import { Context } from "./helpers/Provider";
import { Container } from "./components/Container";
import { Wrapper } from "./components/Wrapper";
import { Header } from "./components/Header";
import { Heading } from "./components/Heading";
import { List } from "./components/List";
import { Link } from "./components/Link";
import { Item } from "./components/Item";
import { Image } from "./components/Image";
import { Content } from "./components/Content";
import { Title } from "./components/Title";
import { Description } from "./components/Description";
import { Date } from "./components/Date";
import { Loading } from "./components/Loading";
import { Logo } from "./components/Logo";

export default function App() {
  const { data, loading, more, load } = useContext(Context);
  const loader = useRef(load);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );
  const [element, setElement] = useState<any>(null);

  useEffect(() => {
    loader.current = load;
  }, [load]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement!);
      }
    };
  }, [element]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper className="wrapper">
          <Header>
            <Logo src={logo} alt="OKO.press logo" />
            <Heading>OKO.press Viewer</Heading>
          </Header>
          <List className="list">
            {data.map((row: any) => (
              <Item key={row.url} title={row.title}>
                <Link href={row.url} target="_blank" rel="noopener noreferrer">
                  <Image src={row.thumb} alt={row.title} loading="lazy" />
                  <Content>
                    <Title>{row.title}</Title>
                    <Description>{row.excerpt}</Description>
                    <Date>{row.date}</Date>
                  </Content>
                </Link>
              </Item>
            ))}

            {loading && <Loading>Ładowanie...</Loading>}

            {!loading && more && (
              <Item
                ref={setElement}
                style={{ background: "transparent" }}
              ></Item>
            )}
          </List>
        </Wrapper>
      </Container>
    </>
  );
}
