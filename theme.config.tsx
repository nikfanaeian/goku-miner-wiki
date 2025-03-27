import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  darkMode: true,
  logo: <span>Goku Miner</span>,
  project: {
    link: 'https://github.com/nikfanaeian/goku-miner-landing',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/nikfanaeian/goku-miner-landing',
  footer: {
    text: 'Goku Miner Whitepaper',
  },
  head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Goku Miner" />
        <meta property="og:description" content="The next site builder" />
      </>
  )
}

export default config
