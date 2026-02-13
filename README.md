# กันต์ธณวิชญ์ ใจสงฆ์ - Personal Website

เว็บไซต์ส่วนตัวของ **กันต์ธณวิชญ์ ใจสงฆ์** (Kanthanawit Jaisong) - นักวิชาการเกษตร กรมการข้าว

สร้างด้วย **[Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**

---

## โครงสร้างเว็บไซต์

เว็บไซต์ประกอบด้วย 5 หน้าหลัก:

| หน้า | รายละเอียด | ไฟล์ |
|------|-----------|------|
| **Home** | หน้าแรกแสดงชื่อและตำแหน่ง พร้อม hero image | `src/pages/index.astro` |
| **About** | ประวัติและข้อมูลส่วนตัว | `src/pages/about.astro` |
| **Lab** | ข้อมูลการวิจัย บุคลากร และนักศึกษา | `src/pages/lab.astro` |
| **Resources** | หนังสือและแอปพลิเคชันที่พัฒนา | `src/pages/resources.astro` |
| **Posts** | บทความและโพสต์ต่างๆ | `src/pages/posts.astro` |

---

## โครงสร้างโปรเจกต์ (Project Structure)

```
/
├── public/              # ไฟล์ Static (รูปภาพ, favicon)
├── src/
│   ├── assets/          # รูปภาพ, styles
│   ├── components/      # ส่วนประกอบต่างๆ
│   │   ├── blog/        # Components สำหรับ Blog
│   │   ├── common/      # Components ทั่วไป
│   │   ├── ui/          # UI Components
│   │   └── widgets/     # Widgets (BottomNav, etc.)
│   ├── content/
│   │   └── post/        # บทความ Blog (.md, .mdx)
│   ├── layouts/         # Layouts
│   │   ├── Layout.astro         # Layout หลัก
│   │   ├── PersonalLayout.astro # Layout สำหรับหน้าทั่วไป + BottomNav
│   │   └── BlogPostLayout.astro # Layout สำหรับหน้า Blog post
│   ├── pages/           # หน้าเว็บไซต์
│   │   ├── index.astro      # หน้าแรก
│   │   ├── about.astro      # หน้า About
│   │   ├── lab.astro        # หน้า Lab
│   │   ├── resources.astro  # หน้า Resources
│   │   ├── posts.astro      # รายการ Posts
│   │   └── [...blog]/       # หน้า Blog post แต่ละบทความ
│   ├── utils/           # Utility functions
│   └── content/config.ts # Content collection config
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

---

## คำสั่งที่ใช้งาน (Commands)

| คำสั่ง | ผลลัพธ์ |
| :--- | :--- |
| `npm install` | ติดตั้ง dependencies |
| `npm run dev` | เริ่ม Development server (`localhost:3000`) |
| `npm run build` | สร้างไฟล์ Production (./dist/) |
| `npm run preview` | พรีวิวไฟล์ Build |

---

## การจัดการ Content

### เพิ่มบทความใหม่

สร้างไฟล์ `.md` หรือ `.mdx` ใน `src/content/post/`:

```md
---
publishDate: 2025-02-13T00:00:00Z
title: ชื่อบทความ
excerpt: คำอธิบายสั้นๆ
image: /images/thumbnail.jpg
---

เนื้อหาบทความ...
```

### แก้ไขหน้าต่างๆ

- **Home**: แก้ไขที่ `src/pages/index.astro`
- **About**: แก้ไขที่ `src/pages/about.astro`
- **Lab**: แก้ไขที่ `src/pages/lab.astro`
- **Resources**: แก้ไขที่ `src/pages/resources.astro`

---

## Tech Stack

- **Framework**: [Astro 4.0](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)
- **Icons**: [Astro Icon](https://github.com/natemoo-re/astro-icon) + Tabler Icons

---

## การ Deploy

### Netlify

[![Netlify Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kanthjs/kanthanawit)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kanthjs/kanthanawit)

---

## License

MIT License — ดูรายละเอียดที่ [LICENSE](./LICENSE.md)
