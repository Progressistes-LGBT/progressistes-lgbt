import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/MyLayout.js';

import Instagram from '../components/social/Instagram';
import Facebook from '../components/social/Facebook';
import Twitter from '../components/social/Twitter';
import Telegram from '../components/social/Telegram';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Progressistes LGBT+</title>
      </Head>

      <div className="home__banner">
        <div>
          <h1>Pour l’égalité des droits <span>de tou.te.s</span></h1>
          <p>Progressistes LGBT+ combat contre les discriminations sur l’orientation sexuelle et l’identité de genre.</p>
        </div>
      </div>
      <div className="home__social">
        <Link href="/mission">
          <a target="_blank" className="home__social__join">Recevoir notre newsletter</a>
        </Link>
        <div>
          <Link href="/">
            <a title="Sur Instagram"><Instagram /></a>
          </Link>
          <Link href="/">
            <a title="Sur Facebook"><Facebook /></a>
          </Link>
          <Link href="/">
            <a title="Sur Twitter"><Twitter /></a>
          </Link>
          <Link href="/">
            <a title="Sur Telegram"><Telegram /></a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
