import { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Box,
  useColorModeValue,
  Input,
  Button,
} from "@chakra-ui/react";
export default function CreatePage() {
  const [newwProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleCreateProduct = () => {
    alert(`Created product: ${newwProduct.name}`);
  };

  return (
    <Container maxH={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
          Create Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.700")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Name"
              value={newwProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newwProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              value={newwProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newwProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image"
              value={newwProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newwProduct, image: e.target.value })
              }
            />
            <Button w={"100%"} colorScheme="blue" onClick={handleCreateProduct}>
              Create
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
}
