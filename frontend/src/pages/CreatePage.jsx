import { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Box,
  useColorModeValue,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

import { useProductStore } from "../store/product";

export default function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const toast = useToast();

  const handleCreateProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Sorry, a error occurred",
        description: message,
        status: "error",
        duration: 6000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "Operation Success",
      description: message,
      status: "success",
      duration: 6000,
      isClosable: true,
    });
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
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: Number(e.target.value) })
              }
            />
            <Input
              placeholder="Image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
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
