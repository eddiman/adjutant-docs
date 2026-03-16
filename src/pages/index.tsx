import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          A persistent personal AI agent that runs on your machine and stays in
          contact with you through Telegram.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg button--primary"
            to="/docs/getting-started/installation">
            Get Started
          </Link>
          <Link
            className="button button--lg button--outline button--secondary"
            to="/docs/intro"
            style={{marginLeft: '1rem'}}>
            Learn More
          </Link>
        </div>
        <div className={styles.installBlock}>
          <code className="install-command">
            git clone https://github.com/eddiman/adjutant.git && cd adjutant &&
            adjutant setup
          </code>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    title: 'Telegram Interface',
    description:
      'Send messages, commands, and photos through Telegram. Adjutant responds with full LLM reasoning via OpenCode.',
  },
  {
    title: 'Knowledge Bases',
    description:
      'Sandboxed sub-agent workspaces for domain-specific knowledge. Each KB runs in isolation with its own permissions.',
  },
  {
    title: 'Autonomous Monitoring',
    description:
      'Scheduled pulse checks and deep reviews scan your registered projects and notify you when something needs attention.',
  },
  {
    title: 'Privacy First',
    description:
      'Runs entirely on your machine. No server, no cloud. Data only leaves your device through the messages you send.',
  },
  {
    title: 'Extensible',
    description:
      'Backend-agnostic messaging adaptor, pluggable capabilities, and a three-layer identity model you control.',
  },
  {
    title: 'Memory & Learning',
    description:
      'Persistent long-term memory with auto-classification. Adjutant remembers corrections, decisions, and patterns.',
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className="feature-card">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitecturePreview() {
  return (
    <section className={styles.architectureSection}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <Heading as="h2">How It Works</Heading>
            <p>
              Adjutant runs as a background service on macOS or Linux. It polls
              Telegram for messages, routes them through a backend-agnostic
              dispatcher, and responds using OpenCode-powered AI reasoning.
            </p>
            <p>
              Commands like <code>/pulse</code>, <code>/reflect</code>, and{' '}
              <code>/kb query</code> give you structured access to project
              monitoring, deep analysis, and domain-specific knowledge bases.
            </p>
            <Link
              className="button button--outline button--primary"
              to="/docs/architecture/overview">
              Architecture Overview
            </Link>
          </div>
          <div className="col col--6">
            <pre className={styles.architectureDiagram}>{`  You --> Telegram --> Adjutant Listener
                          |
                    Dispatcher
                    /        \\
              /command     natural language
                |               |
           cmd_handlers    opencode_run
                |               |
              Reply       Agent Response
                |               |
                v               v
              Telegram <--------'`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Personal AI Agent Framework`}
      description="A persistent personal AI agent framework that runs on your machine and communicates through Telegram.">
      <HeroBanner />
      <main>
        <FeaturesSection />
        <ArchitecturePreview />
      </main>
    </Layout>
  );
}
