---
title: maxksorg - misc
layout: base.njk
date: 2024-09-15
---
# {{ title }}

Welcome to the Miscellaneous page! Here, you'll find useful links to explore various aspects of the site, including website stats, build information, version history, and more. Stay informed about the inner workings and updates of maxksorg.

### Source

[maxksorg (maxks.org) source code]({{ metadata.repo }})

### Artifact

[maxks.org artifact]({{ metadata.repo }}/tree/pages/public)

### Version

{{ metadata.version }}

### Sitemap

[maxks.org sitemap](https://maxks.org/sitemap.xml)

### CI/CD pipeline

[![Build static content to Pages]({{ metadata.repo }}/actions/workflows/build-pages.yml/badge.svg?branch=main)]({{ metadata.repo }}/actions/workflows/build-pages.yml)

[![Deploy static content to Pages]({{ metadata.repo }}/actions/workflows/deploy-pages.yml/badge.svg?branch=pages)]({{ metadata.repo }}/actions/workflows/deploy-pages.yml)

### Stack

- Front End
    - [11ty](https://www.11ty.dev/)
- Back End
    - [Pages](https://pages.github.com/)