# Micro Frontend Platform POC - Documentation Index

Welcome to the Micro Frontend Platform Proof-of-Concept! This document serves as your guide to all project documentation.

## 📖 Start Here

### For Quick Setup
👉 **[QUICKSTART.md](./QUICKSTART.md)** - Get running in 5 minutes
- Installation steps
- Starting the shell
- Running micro apps
- Troubleshooting

### For Project Overview
👉 **[POC_SUMMARY.md](./POC_SUMMARY.md)** - High-level summary
- What was built
- Architecture highlights
- Proof points & key features
- Future enhancements

### For Complete Documentation
👉 **[README.md](./README.md)** - Comprehensive guide
- Project structure
- Architecture details
- Communication patterns
- Deployment strategy

## 🗂️ Project Structure

```
micro-frontend-platform/
├── INDEX.md                    ← You are here
├── QUICKSTART.md              ← 5-minute setup
├── POC_SUMMARY.md             ← Architecture overview
├── README.md                  ← Full documentation
│
├── apps/
│   ├── shell/                 # Super App (Next.js 16)
│   │   ├── app/page.tsx      # Landing page
│   │   ├── app/dashboard/    # Dashboard & app loader
│   │   └── components/ui/    # UI components
│   ├── billing/               # Billing micro app (Vite)
│   ├── analytics/             # Analytics micro app (Vite)
│   └── customer/              # Customer micro app (Next.js)
│
├── packages/
│   └── platform-sdk/          # Shared SDK
│       ├── event-bus.ts      # Communication layer
│       └── index.ts          # Exports & utilities
│
└── package.json              # Workspace root
```

## 🚀 Quick Links

### Getting Started
1. [QUICKSTART.md](./QUICKSTART.md) - Installation & running
2. [QUICKSTART.md#3-navigate-to-dashboard](./QUICKSTART.md#3-navigate-to-dashboard) - Using the dashboard
3. [QUICKSTART.md#6-build-your-own-micro-app](./QUICKSTART.md#6-build-your-own-micro-app) - Create new micro app

### Understanding the Architecture
1. [POC_SUMMARY.md#-architecture-highlights](./POC_SUMMARY.md#-architecture-highlights) - Core design
2. [README.md#-architecture](./README.md#-architecture) - Detailed breakdown
3. [README.md#-communication-patterns](./README.md#-communication-patterns) - How apps talk

### Code Reference
1. **Platform SDK**: `packages/platform-sdk/event-bus.ts`
   - EventBus implementation
   - Event types and API

2. **Shell App**: `apps/shell/app/`
   - Landing page: `page.tsx`
   - Dashboard: `dashboard/page.tsx`
   - App loader: `dashboard/[appName]/page.tsx`

3. **Billing Micro App**: `apps/billing/src/`
   - Web Component: `main.tsx`
   - React component: `BillingApp.tsx`
   - Styles: `app.css`

4. **Analytics Micro App**: `apps/analytics/src/`
   - Web Component: `main.tsx`
   - React component: `AnalyticsApp.tsx`
   - Styles: `app.css`

## 🎯 Key Concepts

### EventBus Pattern
Communication layer for loose coupling between apps:
```typescript
import { eventBus, PlatformEvents } from '@openmf/core'

// Subscribe
eventBus.on(PlatformEvents.USER_LOGGED_IN, (event) => {
  console.log('Event received:', event.payload)
})

// Publish
eventBus.emit(
  PlatformEvents.SHOW_NOTIFICATION,
  'my-app',
  { message: 'Hello!' }
)
```

### Web Components
Standard browser API for app encapsulation:
```typescript
class MicroYourApp extends HTMLElement {
  connectedCallback() {
    const root = ReactDOM.createRoot(this)
    root.render(<YourApp />)
  }
}
customElements.define('micro-your-app', MicroYourApp)
```

### Dynamic Loading
Shell loads micro apps at runtime:
```typescript
const script = document.createElement('script')
script.src = 'http://path-to-app/app.js'
document.head.appendChild(script)

const element = document.createElement('micro-your-app')
containerRef.current.appendChild(element)
```

## 📚 Documentation by Topic

### Setup & Installation
- [QUICKSTART.md](./QUICKSTART.md) - Getting started
- [QUICKSTART.md#prerequisites](./QUICKSTART.md#prerequisites) - Requirements
- [QUICKSTART.md#troubleshooting](./QUICKSTART.md#troubleshooting) - Common issues

### Architecture & Design
- [POC_SUMMARY.md#-key-design-decisions](./POC_SUMMARY.md#-key-design-decisions) - Architecture rationale
- [README.md#-architecture](./README.md#-architecture) - Detailed architecture
- [README.md#-deployment-strategy](./README.md#-deployment-strategy) - Production deployment

### Development
- [QUICKSTART.md#6-build-your-own-micro-app](./QUICKSTART.md#6-build-your-own-micro-app) - Create new app
- [QUICKSTART.md#8-test-eventbus-communication](./QUICKSTART.md#8-test-eventbus-communication) - EventBus usage
- [README.md#-communication-patterns](./README.md#-communication-patterns) - Communication examples

### Production Readiness
- [POC_SUMMARY.md#-checklist-for-production](./POC_SUMMARY.md#-checklist-for-production) - Production checklist
- [README.md#-future-enhancements](./README.md#-future-enhancements) - Roadmap
- [README.md#-deployment-strategy](./README.md#-deployment-strategy) - Deployment approach

## 🔍 File Guide

| File | Purpose | Audience |
|------|---------|----------|
| **INDEX.md** | Navigation hub | Everyone (start here) |
| **QUICKSTART.md** | 5-minute setup | Beginners |
| **POC_SUMMARY.md** | High-level overview | Architects, decision makers |
| **README.md** | Full documentation | Developers, architects |
| **apps/shell/** | Main application | Frontend developers |
| **apps/billing/** | Example micro app | Micro app developers |
| **apps/analytics/** | Example micro app | Micro app developers |
| **packages/platform-sdk/** | Shared utilities | All developers |

## 🎓 Learning Path

### For First-Time Users
1. Read this file (INDEX.md) - 2 minutes
2. Read [QUICKSTART.md](./QUICKSTART.md) - 5 minutes
3. Run `npm run dev` and explore the UI - 5 minutes
4. Read [POC_SUMMARY.md](./POC_SUMMARY.md) - 10 minutes

### For Developers
1. [QUICKSTART.md](./QUICKSTART.md) - Setup
2. [README.md](./README.md) - Architecture deep dive
3. Explore `apps/shell/app/` - Shell implementation
4. Explore `apps/billing/src/` - Micro app example
5. Review `packages/platform-sdk/` - SDK utilities

### For Architects
1. [POC_SUMMARY.md](./POC_SUMMARY.md) - Overview
2. [README.md#-architecture](./README.md#-architecture) - Architecture details
3. [POC_SUMMARY.md#-architecture-proof-points](./POC_SUMMARY.md#-architecture-proof-points) - Validation table
4. [README.md#-future-enhancements](./README.md#-future-enhancements) - Roadmap

## 💻 Essential Commands

```bash
# Navigate to shell
cd apps/shell

# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# View production build
npm run start
```

## 🔗 Important Resources

### External Documentation
- [Web Components MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Components)
- [CustomEvent API](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent)
- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)

### In This Repository
- Source code: `apps/` and `packages/`
- Documentation: `*.md` files in root
- Configuration: `package.json`, `vite.config.ts`, `next.config.mjs`

## ❓ FAQ

**Q: Where do I start?**
A: Read [QUICKSTART.md](./QUICKSTART.md)

**Q: How do I add a new micro app?**
A: See [QUICKSTART.md#6-build-your-own-micro-app](./QUICKSTART.md#6-build-your-own-micro-app)

**Q: How do apps communicate?**
A: See [README.md#-communication-patterns](./README.md#-communication-patterns)

**Q: Is this production-ready?**
A: It's a POC. See [POC_SUMMARY.md#-checklist-for-production](./POC_SUMMARY.md#-checklist-for-production) for production steps

**Q: What about Module Federation?**
A: This POC intentionally avoids Module Federation. See [POC_SUMMARY.md#no-module-federation](./POC_SUMMARY.md#no-module-federation) for why

## 🎉 Next Steps

1. **Get it running**: Follow [QUICKSTART.md](./QUICKSTART.md)
2. **Understand it**: Read [POC_SUMMARY.md](./POC_SUMMARY.md)
3. **Explore deeply**: Check [README.md](./README.md)
4. **Build something**: Create a new micro app
5. **Deploy it**: Follow production checklist

---

**Choose your path:**
- 🚀 **Just want it running?** → [QUICKSTART.md](./QUICKSTART.md)
- 🏗️ **Want to understand the architecture?** → [POC_SUMMARY.md](./POC_SUMMARY.md)
- 📖 **Need full documentation?** → [README.md](./README.md)
- 👨‍💻 **Ready to code?** → [QUICKSTART.md#6-build-your-own-micro-app](./QUICKSTART.md#6-build-your-own-micro-app)
