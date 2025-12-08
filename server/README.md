# Bungash Designs - Server

Node/Express backend for Bungash Designs. Provides authentication and a colors CRUD API for admin management.

Quick start:

1. Copy `.env.example` to `.env` and edit values.
2. Install dependencies:

```bash
cd server
npm install
```

3. Seed admin user (creates `admin@bungash.com` / `123`):

```bash
npm run seed
```

4. Run dev server:

```bash
npm run dev
```

API endpoints:
- `POST /api/auth/login` - { email, password } => { token }
- `GET /api/colors` - public list
- `POST /api/colors` - create (requires Authorization: Bearer <token>)
- `PUT /api/colors/:id` - update (admin)
- `DELETE /api/colors/:id` - delete (admin)
