import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import Card from "./components/Card";
import { GlobalStyle } from "./components/styles/globalStyle";
import contents from "./contents";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const contentElements = contents.map((content) => (
    <Card key={content.id} {...content} />
  ));
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>{contentElements}</Container>
      <Footer />
    </>
  );
};

export default App;
