import type { PortableTextComponents } from '@portabletext/svelte';

export const defaultPortableRichTextComponents: PortableTextComponents = {
  list: {
    bullet: 'ul'
,
    number: 'ol',
  },
  listItem: {
    bullet: 'li',
    number: 'li',
  },
  block: {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    normal: 'p',
  },
};