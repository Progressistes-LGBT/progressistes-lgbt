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
        <link rel="shortcut icon" href="static/favicon.ico" />
      </Head>

      <div className="home__banner">
        <div className="home__banner__title">
          <h1>Bienvenue sur le portail <span>des Progressistes LGBT+</span></h1>
          <p>Pour l’égalité des droits de tou.te.s : Progressistes LGBT+ combat les discriminations sur l’orientation sexuelle et l’identité de genre.</p>
        </div>
        <div className="home__banner__rainbow">
          <div className="rainbow-pink"></div>
          <div className="rainbow-orange"></div>
          <div className="rainbow-yellow"></div>
          <div className="rainbow-green"></div>
          <div className="rainbow-sky"></div>
          <div className="rainbow-blue"></div>
          <div className="rainbow-purple"></div>
        </div>
      </div>

      <div className="home__social">
        <Link href="http://eepurl.com/gvyCB9">
          <a target="_blank" className="home__social__join">Recevoir notre newsletter</a>
        </Link>
        {/*
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
        */}
      </div>

      {/*
      <div className="home__causes">
        <h2>Nos combats</h2>
        <div>
          <div>
            <h3>PMA</h3>
            <p>Ouvrir la procréation médicalement assistée à tou.te.s, et qu'elle soit remboursée.</p>
          </div>
          <div>
            <h3>PMA</h3>
            <p>Ouvrir la procréation médicalement assistée gratuitement à toutes les femmes, peu importe leur statut matrimonial ou leur sexualité.</p>
          </div>
          <div>
            <h3>PMA</h3>
            <p>Ouvrir la procréation médicalement assistée gratuitement à toutes les femmes, peu importe leur statut matrimonial ou leur sexualité.</p>
          </div>
        </div>
      </div>
      */}
    </Layout>
  );
}
