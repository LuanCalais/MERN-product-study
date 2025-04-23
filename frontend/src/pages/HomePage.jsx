import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const { getProducts, products } = useProductStore();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"Center"}
        >
          Current Products
        </Text>

        {products.length ? (
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            spacing={10}
            width={"full"}
          >
            {products.map((product, i) => (
              <ProductCard
                key={`${product.id}_${Math.random()}_${i}`}
                product={product}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Text
            fontSize={"xl"}
            fontWeight={"bold"}
            bgClip={"text"}
            textAlign={"Center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
          >
            No products{" :( "} <br />
            <Link to="/create">
              <Text
                as={"span"}
                color={"blue.500"}
                _hover={{ textDecoration: "underline" }}
              >
                Create Product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}
