import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>전기자기학</>,
    imageUrl: 'img/Eletrimagnetism.png',
    toUrl:'docs/Electromagnetism/introduction',
    description: (
      <>
        전기와 자기에 대한 학문
      </>
    ),
  },
  {
    title: <>전기회로</>,
    imageUrl: 'img/ElectricCircuit.jpg',
    toUrl:'docs/ElectricCircuits/introduction',
    description: (
      <>
        전기회로의 기본적인 구성 요소 및 해석을 위한 이론
      </>
    ),
  },
  {
    title: <>제어공학</>,
    imageUrl: 'img/ControlEngineering.jpg',
    toUrl:'docs/ControlEngineering/introduction',
    description: (
      <>
        자동 제어에 관한 공학
      </>
    ),
  },
  {
    title: <>전기기기</>,
    imageUrl: 'img/ElectricMachinary.png',
    toUrl:'docs/ElectricMachinery/introduction',
    description: (
      <>
        발전기, 전동기, 변압기
      </>
    ),
  },
  {
    title: <>전력공학</>,
    imageUrl: 'img/ElectricPowerSystem.png',
    toUrl:'docs/ElectricPowerSystem/introduction',
    description: (
      <>
        송전, 발전, 배전 등
      </>
    ),
  },
  {
    title: <>전기응용 및 공사재료</>,
    imageUrl: 'img/ElectricApplication.png',
    toUrl:'docs/ElectricApplication/introduction',
    description: (
      <>
        전기응용 및 공사재료
      </>
    ),
  },
  {
    title: <>전기설비기술기준</>,
    imageUrl: 'img/KEC.png',
    toUrl:'docs/KEC/introduction',
    description: (
      <>
        전기설비기술기준
      </>
    ),
  },
];

function Feature({imageUrl, title, toUrl, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  const tUrl = useBaseUrl(toUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href={tUrl}>
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      <h3 className="text--center">{title}</h3>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
