import { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Center,
  Container,
  Group,
  Image,
  MantineProvider,
  Text,
} from "@mantine/core";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // Fetch advice on component mount (on refresh)
    fetchAdvice();
  }, []);

  return (
    <MantineProvider>
      <Center style={{ height: "100vh" }}>
        <Container>
          <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            mx={"33em"}
            my={"7em"}
          >
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="center" __size={"100vh"}>
              <Text >Advice is free!! </Text>
            </Group>

            <Text size="sm"  c="teal" fw={"bolder"}>
              {advice}
            </Text>
            <Center>
              <Button
              ml={"5em"}
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={fetchAdvice}
              >
                Click here
              </Button>
            </Center>
          </Card>
        </Container>
      </Center>
    </MantineProvider>
  );
}

export default App;
