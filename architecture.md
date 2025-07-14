# 🏗️ Architecture Overview — TrioVie SM

## 🎯 Mục tiêu kiến trúc

- Modular, dễ scale và bảo trì
- Hỗ trợ SSR (Server-side rendering) và SEO tốt
- Realtime, event-driven (sẵn sàng mở rộng sau này)
- Tách biệt rõ ràng frontend/backend, tận dụng shared types

---

## 🗺️ High-level Architecture

```mermaid
flowchart TD
    A[User Browser] -->|HTTP/HTTPS| B[Next.js Frontend]
    B -->|API Calls| C[NestJS Backend]
    C --> D[PostgreSQL]
    C --> E[Redis]
    C --> F[S3 Storage]
    C --> G[Admin tools]
```
