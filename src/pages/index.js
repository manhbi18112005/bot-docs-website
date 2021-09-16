import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Footer from '@theme/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {Feature} from '../components/feature';
import {Pricing} from '../components/pricing';
import {Highlights} from '../components/highlights';
import Image from '@theme/IdealImage';
import {Nav} from '../components/nav';
import {ContactForm} from '../components/contact';


const squares = [
  {
    title: 'Secure',
    imageUrl: 'img/check.svg',
    subtitle: (
      <> 
      Built with the highest standards of data protection.
      </>
    ),
    description: (
      <>
      It has passed conformance testing by the Ontario Ministry of Health 
      and is used by physicians across the province. 
      </>
    ),
  },
  {
    title: 'Specialized',
    imageUrl: 'img/check.svg',
    subtitle: (
      <> 
      The IntelAGENT service is simple yet very powerful.
      </>
    ),
    description: (
      <>
      We’ve worked with physicians across all specialties to ensure we fit 
      their requirements. We’re an agile, responsive company focused on physicians.
      </>
    ),
  },
  {
    title: 'Superior',
    imageUrl: 'img/check.svg',
    subtitle: (
      <> 
      We’re designed to simplify the physician workflow.
      </>
    ),
    description: (
      <>
      Everything we offer, from our label scanner to our curated billing 
      codes to revenue trackers to instant OHIP card validation, is built 
      around your needs. 
      </>
    ),
  },
];

function AppList() {
  const {siteConfig} = useDocusaurusContext();
  const apps = siteConfig.customFields.users.filter(app => app.pinned);

  return (
    <div id="aduvjp">
    <div className="highlightsContainer">
      <div className="highlightsLimiter">
        <h1>
        Trusted by many <span class="css-faestz">Discord</span> community.
          </h1>
        <ul className="AppList">
        
          {apps.map((app, i) => {
            const imgSource = useBaseUrl('img/showcase/' + app.icon);
            return (
              <li key={i} className="applist-item">
                {app.infoLink ? (
                  <a href={app.infoLink}>
                    <img src={imgSource} alt={app.name} />
                  </a>
                ) : (
                  <img src={imgSource} alt={app.name} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
    </div>
  );
}

function Square({imageUrl, title, subtitle, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.square)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.squareImage} src={imgUrl} width={50} alt={title} />
        </div>
      )}
      <h2 className="highlightsTitle">{title}</h2>
      <p className="highlightsSubTitle">{subtitle}</p>
      <p>{description}</p>
    </div>
  );
}

const NewMessage = () => {
  return (
  <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">New Web-based Software Now Available!</h1>
            <p className="hero__subtitle">The mobile app remains free for all users.</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('/')}>
                Learn More
              </Link>
            </div>
          </div>        
        </header>
    ); 
}

const Hero = () => {
  return (
      <div id="main-header">
        <div className="container">
          <h1>
            <span class="css-faz">Enhance </span>your<br></br>
            <span class="css-faestz">Discord community.</span>
          </h1>
          <h2>
          Turn your community into the MOST EXCITING place to be!<br></br>
          Join us and start to manage and build a fun and inviting community.
          </h2>
          
          <Link
            to="https://discord.com/oauth2/authorize?client_id=736915194772586598&scope=bot%20applications.commands"
            title="Invite Bot"
            className="main-button"
          >Invite Bot
          </Link>
          <Link
          to="/docs"
          className="sec-button"
          title="Documentation"
        >Documentation
        </Link>
        </div>
      </div>
  );
};

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {title, tagline, url, favicon} = siteConfig;
  const ogImage = `${url}/img/IntelAGENT_Logo_WithShadow.png`;

  return (
    <div>
    <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content={`${title} - ${tagline}`} />
        <meta name="description" content='No Name Studio' />
        <meta property="og:description" content={tagline} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <link rel="shortcut icon" href={favicon}></link>
        <title>
          {title} - {tagline}
        </title>
      </Head>          
      <div className="mainContainer">
        <Nav/>
              
        <Hero/>
      </div>

      <AppList />
      <Pricing />
      <Highlights
      highlights={[
        {
          title: ' Music for your server',
          text: (
            <p>
            Chilling together with your friends in your Discord server has always been possible. Our bot supports playing all your favourite musics by top-rated artists from many flatforms.
            </p>
          ),
          link: (
            <div className={styles.indexGithubLinks}>
              <Link
                to="/docs/features/hcv"
                title="Health Card Validation Documentation"
              >
                Learn more
              </Link>              
            </div>
          ),
          img: (
            <img className={styles.squareImage} src={'img/healthcard.svg'}  />
          ),
        },
        {
          title: 'Leaderboards for everyone',
          text: (
            <p>
              Let members compete for the top spot on your community’s rankings. Display your most active users and let your community know who’s the best! Give leveled roles automatically when users reach a certain leaderboard score!
            </p>
          ),
          link: (
            <Link
              to="/docs/features/quick-copy"
              title="Curated Billing Coedes"
            >
              Lean more
            </Link>
          ),
          img: (
            <img className={styles.squareImage} src={'img/billing-codes.svg'}  />
          ),
        },
        {
          title: 'Artificial Intelligience Chatbot',
          text: (
            <p>
            Meet and build your relationship with our dumbest chatbot in the world. :))
            </p>
          ),
          link: (
            <a
              href="/docs/features/favourites"
              title="Pre-set Favourite codes"
            >
              Learn more
            </a>
          ),
          img: (
            <img className={styles.squareImage} src={'img/recommendation.svg'} />
          ),
        },
        {
          title: 'Just Right, For You',
          text: (
            <p>
            You are able to customize specific elements of the bot off or on, personally or for your server.
            </p>
          ),
          link: (
            <a
              href="/docs/features/adding-referring-physician"
              title="Referring Physician Billing Numbers"
            >
              Learn more
            </a>
          ),
          img: (
            <img className={styles.squareImage} src={'img/database.svg'} />
          ),
        }
      ]}
    />
    <main>
      {squares && squares.length > 0 && (
        <section className={styles.squares}>
          <div className="container">
            <div className="row">
              {squares.map((props, idx) => (
                <Square key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
     </main>

      
      <Feature
        reversed={true}
        img={
          <Image
            img={require("../../static/img/rankcard.png")}
            alt="Rank Card"
            loading="auto"
          />
        }
        title="Levels and XP in your Discord Server"
        text={
          <>
            <p>Gamers love to grind. Use our leveling system to identify and reward the most active members of your community. Let them show off a cool customizable rank card and compete for the mighty first spot of your leaderboard!<br></br> <br></br>Automatically give roles when they reach a certain level to reward the most active members with access to exclusive channels and privileged permissions.</p>
          </>
        }
      />

      <Feature
        img={
          <Image
            img={require('../../static/img/0Y12OCc.png')}
            alt="Chess in the park"
            loading="auto"
          />
        }
        title="Singleplayer - Multiplayer games"
        text={
          <>
            <p>Don't let your server be a boring place. With our bot, you have a variable choices of games ranging from Trivia, Akinator, TicTacToe, RPG, ... Moreover, you can play Multiplayer Games in <strong>voice chat</strong> together with your friends. Wanna participating in fishing competitions?</p>
          </>
        }
      />

      <Feature
        reversed={true}
        img={
          <Image
            img={require('../../static/img/Manage claims.png')}
            alt="Intercept changes via HTTP"
            loading="auto"
          />
        }
        title="Manage Claims"
        text={
          <>
            <p><strong>Organized Claims</strong><br></br>
            Review your claims in a colour coded list to see your claims' status. Sort by date and status to 
            narrow down your searches and get the information you need.
            </p>
            <p><strong>Rejections</strong><br></br>
            Easily review your rejected claims as they are reported and correct errors instantly so you get 
            paid without delay.
            </p>
            <p><strong>Drafts</strong><br></br>
            Store your work in progress on our servers and come at your convenience when you're ready to 
            finalize your claim.
            </p>

          </>
        }
      />   
      <Feature
        img={
          <Image
            img={require('../../static/img/Billing codes.png')}
            alt="Annotations"
            loading="auto"
          />
        }
        title="Entering Billing Codes - Fast!"
        text={
          <>
            <p><strong>Favourites</strong><br></br>
            Keep a list of your favourite billing codes easily accessible so you can save time and don't need 
            to search for your most commonly used codes.
            </p>
            <p><strong>Frequent Billing Combinations
            </strong><br></br>
            Common sequences of billing codes can be inserted into a claim with two clicks. The 
            billing codes are copied from a previous claim and include the claim's premium codes and units.
            </p>
            <p><strong>Add, Remove or Change Units</strong><br></br>
            If the copied sequence of billing codes need to have a code added or removed that can be done 
            right from the same screen. The unit of each billing code can also be modified right on the screen.
            </p>
          </>
        }
      />
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default Home;
