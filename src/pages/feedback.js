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


export default function Hello() {
    return (
      <Layout title="Hello" description="Hello React Page">
        <div className="container">
                <div className="row">
                    <div className="col text--center padding-top--sm">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSegHMXRw9KILXaTxfNb3SkbByksPzP6AJmXQcCnsShugenARg/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">Đang tải…</iframe>
                    </div>
                </div>
            </div>
      </Layout>
    );
  }
