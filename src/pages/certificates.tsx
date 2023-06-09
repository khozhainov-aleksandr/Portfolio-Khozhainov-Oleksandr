import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import { ImagesData } from './api/interface';
import { metaPropertyData, imagesData, certificateButtonData } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import styles from '@/styles/Certificates.module.scss'

export default function Certificates() {
  const [showCertificate, setShowCertificate] = useState<ImagesData[]>(imagesData);

  const getFilterCertificate = (value: string) => (
    imagesData.filter((img) => img.title === value)
  );

  return (
    <div className={styles.certificates}>
      <Head>
        <title>Certificates</title>
        <meta name='title' content={metaPropertyData.siteName} />
        <meta name='description' content={metaPropertyData.description} />
        <meta name='keywords' content={metaPropertyData.keywords} />
        <meta name='author' content={metaPropertyData.author} />
      </Head>
      <Menu />
      <Container>
        <h1 className={styles.mainTitle}>
          My Certificates
        </h1>
        <Divider position='center' />
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 5, }}>
          <Masonry gutter='20px' className={styles.btnWrapper}>
            {certificateButtonData.map((button, i) => (
              <button
                key={i}
                className={styles.btn}
                onClick={() => 
                  typeof button.arg !== 'string'
                  ? setShowCertificate(button.arg)
                  : setShowCertificate(getFilterCertificate(button.arg))
                }
              >
                {button.title}
              </button>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          className={styles.galereWrapper}
        >
          <Masonry gutter='20px'>
            {showCertificate.map((data, i) => (
              <Link
                key={i}
                className={styles.link}
                href={data.link}
                target="_blank"
              >
                <Image
                  className={styles.img}
                  src={data.image}
                  alt={data.alt}
                  height={150}
                  width={200}
                />
              </Link>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Container>
      <SocialNetworkSidebar />
    </div>
  )
}
