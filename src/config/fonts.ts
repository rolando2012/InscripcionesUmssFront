import {Inter} from 'next/font/google';
import { Federant } from 'next/font/google';
import { Tangerine } from 'next/font/google';

export const TituloFont = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600','700'],
  variable: '--font-titulo',
});

export const FederantFont = Federant({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-federant',
});

export const TangerineFont = Tangerine({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-tangerine',
});