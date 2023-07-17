import React from 'react';
import clsx from 'clsx';
import Admonition from '@theme/Admonition';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Highlights from '../components/Highlights';
import styles from './index.module.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function Hero() {
    return (
        <header className={clsx('container', styles.heroBanner)}>
            <div className="row padding-horiz--md">
                <div className="col col--7">
                    <div className={clsx(styles.relative, 'row')}>
                        <div className="col">
                            <h1 className={styles.tagline}>
                                Enhance your<br /> Discord community<br />
                            </h1>
                            <h1 className={styles.tagline}>
                             Enhance your<span> Discord community<br /></span>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h2>Turn your community into the MOST EXCITING place to be! Join us and start to manage and build a fun and inviting community.</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={styles.heroButtons}>
                                
                                <Link to="docs" className={styles.getStarted}>Get Started</Link>
                                <Link to="https://botapp.nnsvn.me/dashboard" className={styles.inviteBot}>Dashboard</Link>
                                <iframe src="https://ghbtns.com/github-btn.html?user=manhbi18112005&repo=BotNoName&type=star&count=true&size=large" frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.relative, 'col', 'col--5')}>
                    <div className={styles.logoBlur}>
                        <img src={require(`../../static/img/gif/${Math.floor(Math.random() * 5) + 1}.gif`).default} className={clsx(styles.hideSmall)} />
                    </div>
                    <div className={styles.codeBlock}>
                        <CodeBlock className="language-bash">
                            https://bot.nnsvn.me
                        </CodeBlock>
                    </div>
                </div>
            </div>
        </header>
    );
}

function Features() {
    return (
        <section className={clsx('container', styles.features)}>
            <div className="row">
                <div className="col text--center">
                    <h2>Trusted by <span style={{color:'#00A3FF'}}>123,943 members</span> and <span style={{color: "#5865F2"}}>110 Discord servers.</span></h2>
                </div>
            </div>

            <div className="row">
                <div className="col col--6">
                    <h2>Levels and XP in your Discord Server</h2>
                    <p>Everyone loves to grind. Use our leveling system to identify and reward the most active members of your community. Let them show off a cool customizable <b>rank card</b> and compete for the mighty first spot of your leaderboard!</p>
                    <p>Automatically give roles when they reach a certain level to reward the most active members with access to exclusive channels and privileged permissions.</p>
                    <p>Configure and claim a custom link to your leaderboard. Configure roles to earn more xp, blacklist roles, and other configuration features are also included.</p>
                </div>
                <div className="col col--6">
                    <div className="image-showcase-container">
                    <img src={('https://cdn.nnsvn.me/botapp/img/showcase/leaderboard.png')}/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col col--6">
                    <div className="image-showcase-container">
                    <img src={('https://cdn.nnsvn.me/botapp/img/showcase/music.png')}/>
                    </div>
                </div>
                <div className="col col--6">
                    <h2>🎶 Listen to music with your friends</h2>
                    <p>Enjoy a seamless listening experience and take your server to the next level with our music streaming feature. Bring high quality music to your server and listen with your friends, all from a wide range of popular platforms. Choose from an extensive collection of songs, albums, and playlists, and share your favorite tunes with your community. Easily to queue up songs and control playback, all from the comfort of your voice channel.</p>
                </div>
            </div>

            <div className="row">
                <div className="col col--6">
                    <h2>Super hillarious chatbot 🤨</h2>
                    <p>Have a fun time flirting with our most "intelligent" chatbot ever. GPT-4 is now supported to enhance your experience.</p>
                </div>
                <div className="col col--6">
                    <div className="image-showcase-container">
                    <img src={('https://cdn.nnsvn.me/botapp/img/showcase/chatbot.png')}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col col--6">
                    <div className="image-showcase-container">
                    <img src={('https://cdn.nnsvn.me/botapp/img/showcase/dashboard.png')}/>
                    </div>
                </div>
                <div className="col col--6">
                    <h2>Web Dashboard</h2>
                    <p>With our extensive web dashboard you're able to customize ✰๖ۣۜNσ ๖ۣۜNαмε✰ on the web without having to hardly remember any commands or syntaxes!</p>
                </div>
            </div>

            <div className="row">
                <div className="col col--6">
                    <h2>😎 Make community interact easier</h2>
                    <p>No Name Bot has an awesome list of social commands that let your members interact with each other in a more meaningful way and bring activity to your server.</p>
                    <p>Host giveaways, create polls, accept suggestions, star funny messages, and much more.</p>
                </div>
                <div className="col col--6">
                    <div className="image-showcase-container">
                    <img src={('https://cdn.nnsvn.me/botapp/img/showcase/meme.png')}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col col--6">
                    <div className="video-container">
                        <LiteYouTubeEmbed
                            id="n1K5BDHnr7c"
                            params="autoplay=1&autohide=1&showinfo=0&rel=0"
                            title="【LIVE映像】「青春コンプレックス」/ ぼっち・ざ・ろっく！-SPECIAL STUDIO LIVE-"
                            poster="maxresdefault"
                            webp
                        />
                    </div>
                </div>
                <div className="col col--6">
                    <h2>I love this song hehe</h2>
                    <p>
                        <a href="https://bot.nnsvn.me/discord" target="_blank" rel="noreferrer"><b> Meet our community on Discord</b></a>.
                    </p>
                </div>
            </div>
        </section>
    );
}

const example = `import { PlaywrightCrawler, Dataset } from 'crawlee';

// PlaywrightCrawler crawls the web using a headless
// browser controlled by the Playwright library.
const crawler = new PlaywrightCrawler({
    // Use the requestHandler to process each of the crawled pages.
    async requestHandler({ request, page, enqueueLinks, log }) {
        const title = await page.title();
        log.info(\`Title of \${request.loadedUrl} is '\${title}'\`);

        // Save results as JSON to ./storage/datasets/default
        await Dataset.pushData({ title, url: request.loadedUrl });

        // Extract links from the current page
        // and add them to the crawling queue.
        await enqueueLinks();
    },
    // Uncomment this option to see the browser window.
    // headless: false,
});

// Add first URL to the queue and start the crawl.
await crawler.run(['https://crawlee.dev']);
`;

function ActorExample() {
    return (
        <section className={clsx(styles.try, 'container')}>
            <div className="col">
                <h2>Try Crawlee out 👾</h2>
                <Admonition type="caution" title="before you start">
                    Crawlee requires <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><b>Node.js 16 or higher</b></a>.
                </Admonition>
                <p>
                    The fastest way to try Crawlee out is to use the <b>Crawlee CLI</b> and choose the <b>Getting started example</b>.
                    The CLI will install all the necessary dependencies and add boilerplate code for you to play with.
                </p>
                <CodeBlock className="language-bash">
                    npx crawlee create my-crawler
                </CodeBlock>
                <p>
                    If you prefer adding Crawlee <b>into your own project</b>, try the example below.
                    Because it uses <code>PlaywrightCrawler</code> we also need to install Playwright.
                    It's not bundled with Crawlee to reduce install size.
                </p>
                <CodeBlock className="language-bash">
                    npm install crawlee playwright
                </CodeBlock>
                <CodeBlock className="language-typescript">
                    {example}
                </CodeBlock>
            </div>
        </section>
    );
}

export default function Home() {
    const SvgLogo = require('../../static/img/main.svg').default;
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} · ${siteConfig.tagline}`}
            description={siteConfig.description}>
            <Hero />
            <Features />
        </Layout>
    );
}
