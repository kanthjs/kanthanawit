# กันต์ธณวิชญ์ ใจสงฆ์ - Personal Website

เว็บไซต์ส่วนตัวของ **กันต์ธณวิชญ์ ใจสงฆ์** (Kanthanawit Jaisong) - นักวิชาการเกษตร กรมการข้าว

สร้างด้วย **[Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**

---

## โครงสร้างโปรเจกต์ (Project Structure)

```text
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

---

## License

MIT License — ดูรายละเอียดที่ [LICENSE](./LICENSE.md)
