import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import ImgOne from "@/assets/images/home/showcase-1.jpg";
import ImgTwo from "@/assets/images/home/showcase-2.jpg";
import ImgThree from "@/assets/images/home/showcase-3.jpg";
import ImgFour from "@/assets/images/home/showcase-4.jpg";

import ShowcaseGrid from "../showcase-grid";

const Showcase = () => {
  return (
    <Box component="section" py={6}>
      <Container>
        <Box component="header" mb={[3, 6]}>
          <Typography variant="h2" align="center">
            Πρόσφατα Έργα Μας
          </Typography>
          <Typography component="p" variant="subtitle1" align="center">
            Ποιότητα και καινοτομία σε κάθε έργο
          </Typography>
        </Box>
        <ShowcaseGrid
          items={[
            <Link
              key="showcase-1"
              href="/projects"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <Image
                src={ImgOne}
                alt="showcase-1"
                className="h-full"
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Link>,
            <Link
              key="showcase-2"
              href="/projects"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <Image
                src={ImgTwo}
                alt="showcase-2"
                placeholder="blur"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </Link>,
            <Link
              key="showcase-3"
              href="/projects"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <Image
                src={ImgThree}
                alt="showcase-3"
                placeholder="blur"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
            </Link>,
            <Link
              key="showcase-4"
              href="/projects"
              className="hover:opacity-75 transition-opacity duration-200"
            >
              <Image
                src={ImgFour}
                alt="showcase-4"
                placeholder="blur"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Link>,
          ]}
        />
      </Container>
    </Box>
  );
};

export default Showcase;
