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
import { AlignCenter } from 'react-feather';

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
        Trusted by <span className="css-faestz">93 Discord</span> community and <span className="css-faestz">102222</span> users.
          </h1>
        <ul className="AppList">
        
          {apps.map((app, i) => {
            const imgSource = useBaseUrl('img/showcase/' + app.icon);
            return (
              <li key={i} className="applist-item" style={{alignContent:'center'}}>
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
        <div className="column" style={{display: 'flex'}}>
          <div className="width" style={{width: "50%"}}>
            <h1 style={{textAlign:"left"}}><span>Join our<br></br> community now!</span></h1>
          </div>
          <div className="width reverse svg" style={{width: "50%", display: "flex", alignContent: "center", justifyContent: "space-between"}}>
          <a href="https://facebook.com/nonamestudiovn" target="_blank"><svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 1H9C7.67392 1 6.40215 1.52678 5.46447 2.46447C4.52678 3.40215 4 4.67392 4 6V9H1V13H4V21H8V13H11L12 9H8V6C8 5.73478 8.10536 5.48043 8.29289 5.29289C8.48043 5.10536 8.73478 5 9 5H12V1Z" stroke="#7E67FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          <a href="https://twitter.com/intent/follow?screen_name=nn_myt" target="_blank"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 1.01006C22.0424 1.68553 20.9821 2.20217 19.86 2.54006C19.2577 1.84757 18.4573 1.35675 17.567 1.13398C16.6767 0.911216 15.7395 0.967251 14.8821 1.29451C14.0247 1.62177 13.2884 2.20446 12.773 2.96377C12.2575 3.72309 11.9877 4.62239 12 5.54006V6.54006C10.2426 6.58562 8.50127 6.19587 6.93101 5.4055C5.36074 4.61513 4.01032 3.44869 3 2.01006C3 2.01006 -1 11.0101 8 15.0101C5.94053 16.408 3.48716 17.109 1 17.0101C10 22.0101 21 17.0101 21 5.51006C20.9991 5.23151 20.9723 4.95365 20.92 4.68006C21.9406 3.67355 22.6608 2.40277 23 1.01006V1.01006Z" stroke="#7E67FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          <a href="https://www.twitch.tv/nn_myt" target="_blank"><svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 10V6M19 1H1V17H6V21L10 17H15L19 13V1ZM9 10V6V10Z" stroke="#7E67FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>
          <a href="https://myt.nonamestudio.xyz/discord" target="_blank"><svg width="71" height="55" viewBox="0 0 71 55" fill="none" style={{width:"24px", height:"auto"}} xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#5865F2"/></g><defs><clipPath id="clip0"><rect width="71" height="55" fill="white"/></clipPath></defs></svg></a>
          <Link
            to="https://discord.com/oauth2/authorize?client_id=736915194772586598&permissions=8&scope=bot%20applications.commands"
            title="Invite Bot"
            className="main-button"
            style={{display: "inline-block", padding: "15px 20px", marginTop: "-16px", borderRadius: "35px", boxSizing: "border-box", height: "50.8px", fontSize: "14px", fontWeight: "700", lineHeight: "normal", letterSpacing: "0.4px", textTransform: "uppercase", textDecoration: "none"}}>
            Add bot to Discord
          </Link>
          </div>
        </div>
        <div className="reverse" style={{display: 'flex'}}>
          <div style={{width: '100%'}}>
            <div style={{width: '100%'}}>
              <h2 style={{fontSize: "32px", lineHeight: "39px",margin: "0", marginTop: "1.5em"}}>+100</h2><p style={{fontWeight: "500", fontSize: "14px", lineHeight: "17px", color: "#7e67ff", margin: "0", marginBottom: "1.5em"}}>Servers</p>
            </div>
            <div style={{width: '100%'}}>
              <h2 style={{fontSize: "32px", lineHeight: "39px",margin: "0", marginTop: "1.5em"}}>+150</h2><p style={{fontWeight: "500", fontSize: "14px", lineHeight: "17px", color: "#7e67ff", margin: "0", marginBottom: "1.5em"}}>Available Commands</p>
            </div>
          </div>
          <div style={{width: '100%'}}>
            <div style={{width: '100%'}}>
              <h2 style={{fontSize: "32px", lineHeight: "39px",margin: "0", marginTop: "1.5em"}}>+100k</h2><p style={{fontWeight: "500", fontSize: "14px", lineHeight: "17px", color: "#7e67ff", margin: "0", marginBottom: "1.5em"}}>Members</p>
            </div>
          </div>
          <div style={{width: '50%'}}>
            <div style={{width: '100%'}}>
            <Image
              img={require("./assets/1_vl4zrxMi5mPxnI4y_EFNsA.png")}
              alt="Bot stats"
              style={{borderRadius:"10px", width:"450px", height: "auto", maxWidth: "-webkit-fit-content!important", maxWidth: "fit-content!important", perspective: "484px", transform: "scale(1) perspective(1000px) rotateX(23deg) rotateY(-23deg) rotate(15deg) translateX(5px) translateY(15px)", boxShadow: "67.1px 62.5px 125px -25px rgb(9 9 14 / 86%), 16.2px 37.5px 75px -37.5px rgb(6 12 34 / 27%)"}}
            />
            </div>
          </div>
        </div>
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
            <span className="css-faz">Enhance </span>your<br></br>
            <span className="css-faestz">Discord community.</span>
          </h1>
          <h2>
          Turn your community into the MOST EXCITING place to be!<br></br>
          Join us and start to manage and build a fun and inviting community.
          </h2>
          
          <Link
            to="https://discord.com/oauth2/authorize?client_id=736915194772586598&permissions=8&scope=bot%20applications.commands"
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
        <meta name="description" content='The best free discord leveling bot. Free role rewards, auto moderation, reaction roles and more!' />
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
      {/* <Pricing /> */}
      <Highlights
      highlights={[
        {
          title: ' Music for your server',
          text: (
            <p>
            Chilling together with your friends in your Discord server has always been possible. Our bot supports playing all your favourite music by top-rated artists from many flatforms.
            </p>
          ),
          link: (
            <div className={styles.indexGithubLinks}>
              <Link
                to="/docs/music-commands"
                title="Music commands"
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
              Let members compete for the top spot on your community’s rankings. Display the most active users and let your community know who’s the best! Give leveled roles automatically when users reach a certain leaderboard score!
            </p>
          ),
          link: (
            <Link
              to="/docs/features/other-commands"
              title="Leaderboards for everyone"
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
              href="/docs/features/utlility-commands"
              title="Artificial Intelligience Chatbot"
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
              href="/docs/features/game-commands"
              title="Just Right, For You"
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
      { /*{squares && squares.length > 0 && (
        <section className={styles.squares}>
          <div className="container">
            <div className="row">
              {squares.map((props, idx) => (
                <Square key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
              )} */}
              <script async src="https://arc.io/widget.min.js#QpmUnZtS"></script>
              <script data-ad-client="ca-pub-7236509666550150" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      
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
            img={require('../../static/img/log.png')}
            alt="Advanced Logging"
            loading="auto"
          />
        }
        title="Advanced Logging"
        text={
          <>
            <p>Configure bot to log members who leave and join your server in less than a minute. It can also log deleted messages and keep track of what goes on in your server as well.</p>

          </>
        }
      />   
      <Feature
        img={
          <Image
            img={require('../../static/img/hello.png')}
            alt="Moderation"
            loading="auto"
          />
        }
        title="Moderation"
        text={
          <>
            <p>Prevent spamming, swearing, mass emojis, mass capitals and more with Auto Moderation. Use the simple and intuitive moderation commands to warn, kick, mute, or ban troublemakers.</p>
          </>
        }
      />
      <ContactForm/>
      <Footer />
    </div>
  );
}

export default Home;
