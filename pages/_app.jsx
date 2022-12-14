import Head from 'next/head'
import { slugifyWithCounter } from '@sindresorhus/slugify'

import { Layout } from '@/components/Layout'

import 'focus-visible'
import '@/styles/tailwind.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import * as Fathom from 'fathom-client'

function getNodeText(node) {
  let text = ''
  for (let child of node.children ?? []) {
    if (typeof child === 'string') {
      text += child
    }
    text += getNodeText(child)
  }
  return text
}

function collectHeadings(nodes, slugify = slugifyWithCounter()) {
  let sections = []

  for (let node of nodes) {
    if (node.name === 'h2' || node.name === 'h3') {
      let title = getNodeText(node)
      if (title) {
        let id = slugify(title)
        node.attributes.id = id
        if (node.name === 'h3') {
          if (!sections[sections.length - 1]) {
            throw new Error(
              'Cannot add `h3` to table of contents without a preceding `h2`'
            )
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            title,
          })
        } else {
          sections.push({ ...node.attributes, title, children: [] })
        }
      }
    }

    sections.push(...collectHeadings(node.children ?? [], slugify))
  }

  return sections
}

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('RJDERCQS', {
      includedDomains: ['www.alfredphpworkflows.com'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  let title = pageProps.markdoc?.frontmatter.title

  let pageTitle =
    pageProps.markdoc?.frontmatter.pageTitle ||
    `${pageProps.markdoc?.frontmatter.title} - Alfred PHP Workflow`

  let description = pageProps.markdoc?.frontmatter.description

  let tableOfContents = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
        <meta
          property="og:image"
          content="https://www.alfredphpworkflows.com/images/share-image.png"
        />
        <meta
          property="og:image:alt"
          content="Logo of elephant with bowler hat, text that reads 'Alfred PHP Workflows, Made Easy'"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.alfredphpworkflows.com" />
        <meta property="og:title" content={pageTitle} />
        {description && (
          <meta property="og:description" content={description} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@joetannenbaum" />
      </Head>
      <Layout title={title} tableOfContents={tableOfContents}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
