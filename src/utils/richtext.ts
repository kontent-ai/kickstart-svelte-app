import type { PortableTextComponents } from '@portabletext/svelte';
import Ul from '../components/richtext/Ul.svelte';
import Ol from '../components/richtext/Ol.svelte';
import Li from '../components/richtext/Li.svelte';
import H1 from '../components/richtext/H1.svelte';
import H2 from '../components/richtext/H2.svelte';
import H3 from '../components/richtext/H3.svelte';
import P from '../components/richtext/P.svelte';

export const defaultPortableRichTextComponents: PortableTextComponents = {
  list: {
    bullet: Ul,
    number: Ol,
  },
  listItem: {
    bullet: Li,
    number: Li,
  },
  block: {
    h1: H1,
    h2: H2,
    h3: H3,
    normal: P,
  },
};