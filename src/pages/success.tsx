import Image from "next/image";
import Link from "next/link";
import Head from "next/head"
import { ImageContainer, ImagesContainer } from "../styles/pages/success";
import { SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  productsImages: string[];
}

export default function Success({ customerName, productsImages }: SuccessProps) {
  return (

    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImagesContainer>
          {productsImages.map((image) => (
            <ImageContainer key={image}>
              <Image src={image} width={120} height={110} alt="T-Shirt Image" />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <h1>Compra efetuada</h1>

        <p>
         uhuu <strong>{customerName}</strong>, sua compra de {" "}
         {productsImages.length} camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      customerName: "Teste Automatizado",
      productsImages: ["https://files.stripe.com/links/M_bDRw821L_"],
    },
  };
}
