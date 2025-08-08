'use client'

import Script from 'next/script'
import Head from 'next/head'

export default function GlobalScripts() {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  )
}