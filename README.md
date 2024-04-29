<p align="center">
  <a href="https://kwikpik.io">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://kwikpik.io/favicon.ico">
      <img src="https://kwikpik.io/favicon.ico" height="128">
    </picture>
    <h1 align="center">Kwikpik</h1>
  </a>
</p>

# Blog Starter Kit

Blog Starter Kit lets you instantly deploy a Next.js and Tailwind powered frontend for your Hashnode blog. It consumes [Hashnode's Public APIs](https://apidocs.hashnode.com), and gives you a fully customizable blog that can be deployed anywhere, including a subpath of a custom domain. Combined with [Hashnode's headless mode](https://hashnode.com/headless), it unlocks entirely new possibilities. You can now use Hashnode's [world class editor](https://hashnode.com/neptune) and dashboard to author content and collaborate. And use blog starter kit to customize the frontend to your liking.

# Live Demos

- [Personal theme](https://sandeep.dev/blog)
- [Enterprise theme](https://demo.hashnode.com/engineering)
- [Hashnode theme](https://saikrishna.dev/blog)

## How to deploy

### Step 1

The recommended approach is deploying to Vercel. If you don't have an account already, you can sign up for a free plan.

- Fork this repo
- Create a new project on Vercel and connect this repo
- It's a monorepo. So, choose either `packages/blog-starter-kit/themes/enterprise`, `packages/blog-starter-kit/themes/hashnode` or `packages/blog-starter-kit/themes/personal` as the root directory while importing on Vercel.

  ![selecting the directory to deploy a monorepo](https://cdn.hashnode.com/res/hashnode/image/upload/v1698839884060/O8OoBML5v.PNG?auto=format)

- Choose `Next.js` as framework preset (just above Root Directory setting).
- Set the following environment variables

```
NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT=https://gql.hashnode.com
NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST=engineering.hashnode.com -> Change this to your Hashnode blog URL i.e. handle.hashnode.dev
NEXT_PUBLIC_BASE_URL=/blog -> This could be /blog if you are installing on subpath; otherwise remove this var
NEXT_PUBLIC_MODE=production
```

Once this is deployed, just visit Vercel's auto generated domain to ensure it loads fine. Initially you won't see any posts. But you can always point `NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST` to a different domain such as `engineering.hashnode.com` to visualize.

### Step 2 (optional subpath installation)

Follow the steps below if you would like to install your blog under a custom domain subpath. If not, you can directly map a custom domain to your project on Vercel and have a production-ready blog up and running.

#### Vercel

If your main project is deployed on Vercel, add the following rewrite to `next.config.js`:

```
async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://starter-kit-rose-seven.vercel.app/blog", -> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
      {
        source: "/blog/:path*",
        destination: "https://starter-kit-rose-seven.vercel.app/blog/:path*", -> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
    ];
  },
```

Once you deploy your project, the subpath installation should work successfully.

Note: If you are updating your environment variables in Vercel, make sure to manually redeploy to see the changes.

### Step 3

Now that you have deployed the starter kit on your own domain, you need to tell Hashnode not to generate a UI for your blog. You can do that by visiting your blog dashboard -> advanced tab. Scroll down and locate the section "use Hashnode as a headless CMS". Enable it and enter your blog base URL.

![enable headless mode](https://cdn.hashnode.com/res/hashnode/image/upload/v1697486863293/zMMctLjRZ.png?auto=format)

After enabling, enter your blog URL like the following and save.

![blog base url](https://cdn.hashnode.com/res/hashnode/image/upload/v1697487035077/1sIyw_0v1.png?auto=format)

Congrats 🎉! Hashnode will now treat your blog as a headless blog and send readers directly to the origin.

## Running Locally

- cd into either `packages/blog-starter-kit/themes/enterprise`, or `packages/blog-starter-kit/themes/hashnode` or `packages/blog-starter-kit/themes/personal`
- Copy `.env.example` to `.env.local`
- `pnpm install`
- `pnpm dev`

Visit http://localhost:3000!

## APIs

If you prefer to build your frontend from scratch, you can use our public GraphQL APIs to do so:

- [Docs](https://apidocs.hashnode.com)
- [GraphQL Playground](https://gql.hashnode.com)

## Demo Videos

[![Headless Hashnode Demo — With Blog Starter Kit (Deployed to Vercel)](https://cdn.hashnode.com/res/hashnode/image/upload/v1697541065189/5ct0eFWIu.png?auto=format&w=500)](https://youtu.be/5Yuxoqohvrk)

[![Customizing Hashnode Blog Starter Kit using TailwindCSS — Headless Hashnode Demo](https://cdn.hashnode.com/res/hashnode/image/upload/v1697540919799/MWVa0aD78.png?auto=format&w=500)](https://youtu.be/oH8QG8E0Txk)
