# rss

[![Feed (daily)](https://github.com/latent-laboratory/rss/actions/workflows/daily.yml/badge.svg?event=schedule)](https://github.com/latent-laboratory/rss/actions/workflows/daily.yml)
[![Feed (weekly)](https://github.com/latent-laboratory/rss/actions/workflows/weekly.yml/badge.svg?event=schedule)](https://github.com/latent-laboratory/rss/actions/workflows/weekly.yml)
[![Feed (monthly)](https://github.com/latent-laboratory/rss/actions/workflows/monthly.yml/badge.svg?event=schedule)](https://github.com/latent-laboratory/rss/actions/workflows/monthly.yml)

### Feeds

The following automated feeds are updated daily, weekly, and monthly with new hashes. Replace `{project}` with any of these [generators](https://generator.pxlq.art).

`[0 0 * * *]`  
https://rss.pxlq.art/{project}/daily

`[0 1 * * 0]`  
https://rss.pxlq.art/{project}/weekly

`[0 2 1 * *]`  
https://rss.pxlq.art/{project}/monthly

### Schematic

```mermaid
flowchart TD
  subgraph Scheduler
    Actions e1@==> D0(Daily);
    Actions e2@==> W0(Weekly);
    Actions e3@==> M0(Monthly);
  end

  subgraph Feeds
    D0 --> |0xabc123| D1["/rss/{project}/daily"];
    W0 --> |0xabc123| W1["/rss/{project}/weekly"];
    M0 --> |0xabc123| M1["/rss/{project}/monthly"];
  end

  D1 --> D2(RSS);
  W1 --> W2(RSS);
  M1 --> M2(RSS);

  e1@{ animate: true }
  e2@{ animate: true }
  e3@{ animate: true }
```
