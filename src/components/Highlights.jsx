import React from 'react';
import clsx from 'clsx';
import styles from './Highlights.module.css';

const FeatureList = [
    {
        title: 'JavaScript & TypeScript',
        Svg: require('../../static/img/features/runs-on-js.svg').default,
        description: (
            <>
                We believe websites are best scraped in the language they're written in. Crawlee <b>runs on Node.js
                and it's built in TypeScript</b> to improve code completion in your IDE, even if you don't use TypeScript yourself.
            </>
        ),
    },
    {
        title: 'HTTP scraping',
        Svg: require('../../static/img/features/fingerprints.svg').default,
        description: (
            <>
                Crawlee makes HTTP requests that <b>mimic browser headers and TLS fingerprints</b>. It also rotates
                them automatically based on data about real-world traffic. Popular HTML parsers <b>Cheerio and JSDOM</b> are included.
            </>
        ),
    },
    {
        title: 'Queue and Storage',
        Svg: require('../../static/img/features/storage.svg').default,
        description: (
            <>
                You can save files, screenshots and JSON results to disk with one line of code or plug an adapter
                for your DB. Your URLs are kept in a queue that ensures their uniqueness and that you don't lose progress when something fails.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="padding-horiz--md padding-bottom--md">
                <div className={styles.featureIcon}>
                    {Svg ? <Svg alt={title}/> : null}
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Highlights() {
    const Svg = require('../../static/img/features/gradient.svg').default;
    return (
        <section className={styles.features}>
            {<Svg />}
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
