import Head from 'next/head';
import Image from 'next/image';
import { metaPropertyData, skillsCardsData } from './api';
import { Menu } from '@/components/Menu';
import { SocialNetworkSidebar } from '@/components/SocialNetworkSidebar';
import { Container } from '@/components/Container';
import { Divider } from '@/components/Divider';
import styles from '@/styles/Skills.module.scss'

export default function Skills() {
  return (
    <div className={styles.skills}>
      <Head>
        <title>Skills</title>
        <meta name='title' content={metaPropertyData.siteName} />
        <meta name='description' content={metaPropertyData.description} />
        <meta name='keywords' content={metaPropertyData.keywords} />
        <meta name='author' content={metaPropertyData.author} />
      </Head>
      <Menu />
      <Container>
        <h1 className={styles.mainTitle}>
          My skills, which I use in my Projects
        </h1>
        <Divider position='center' />
        <div className={styles.itemsWrapper}>
          {skillsCardsData.map((card, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.itemImgWrapper}>
                <Image src={card.img} alt={card.title} className={styles.itemImg} />
              </div>
              <h3 className={styles.itemTitle}>
                {card.title}
              </h3>
              <p className={styles.itemDesc}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <SocialNetworkSidebar />
    </div>
  )
}
