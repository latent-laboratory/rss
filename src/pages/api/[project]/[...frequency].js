const RSS = require('rss')

import daily from '@/data/daily.json'
import weekly from '@/data/weekly.json'
import monthly from '@/data/monthly.json'

const data = {daily, weekly, monthly}

const API = process.env.NEXT_PUBLIC_API_URL
const GENERATOR = process.env.NEXT_PUBLIC_GENERATOR_URL

export default function handler(req, res) {
  const { project, frequency } = req.query
  try {
    const feed = new RSS({
      title: `${project} (${frequency})`,
      site_url: API,
      feed_url: `${API}/rss/${frequency}`,
      generator: 'generator'
    })
    data[frequency].posts.forEach((p) => {
      const generator = `${GENERATOR}/${project}/${p.hash}?render`
      feed.item({
        title: ' ',
        url: generator,
        date: p.date,
        categories: ['art'],
        description: `
<div>
  <iframe src="${generator}" width="500" height="500" frameBorder="0" scrolling="no"/>
  <p>${p.hash}</p>
</div>
`
      })
    })
    res.setHeader('Content-Type', 'application/xml')
    res.status(200).send(feed.xml())
  } catch (error) {
    res.status(500).send('Internal Server Error')
  }
}