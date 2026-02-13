import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'หน้าแรก',
      href: getPermalink('/'),
    },
    {
      text: 'เกี่ยวกับ',
      href: getPermalink('/about'),
    },
    {
      text: 'Lab',
      href: getPermalink('/lab'),
    },
    {
      text: 'แหล่งข้อมูล',
      href: getPermalink('/resources'),
    },
    {
      text: 'บทความ',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'ติดต่อ', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'เว็บไซต์',
      links: [
        { text: 'หน้าแรก', href: getPermalink('/') },
        { text: 'เกี่ยวกับ', href: getPermalink('/about') },
        { text: 'บทความ', href: getBlogPermalink() },
      ],
    },
    {
      title: 'งานวิจัย',
      links: [
        { text: 'Lab', href: getPermalink('/lab') },
        { text: 'แหล่งข้อมูล', href: getPermalink('/resources') },
      ],
    },
    {
      title: 'ติดต่อ',
      links: [
        { text: 'แบบฟอร์มติดต่อ', href: getPermalink('/contact') },
        { text: 'Email', href: 'mailto:email@example.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ThaiUI/astrowind' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
