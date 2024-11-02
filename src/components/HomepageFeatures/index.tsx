import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'No advertising ✨',
    description: (
      <>
        On our platform, you will never see intrusive advertising. We
        believe that your social space should only be disrupted by what
        really matters: your interactions.
      </>
    ),
  },
  {
    title: 'Limited screen time 🕑',
    description: (
      <>
        We offer you the opportunity to limit your screen time according
        to your own criteria, to promote a healthy balance between your
        digital and personal life.
      </>
    ),
  },
  {
    title: 'No algorithm, so no control over your content 👀',
    description: (
      <>
        On our platform, you will never see intrusive advertising. We
        believe that your social space should only be disrupted by what
        really matters: your interactions.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
