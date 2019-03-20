import { Context } from 'koa';
const isProduction = process.env.NODE_ENV === 'production';

const html = () => {
  const Path = isProduction ? 'app/' : '';
  const link = isProduction
    ? `<link rel="stylesheet" href="${Path}css/main.css" />`
    : '';
  const linkVendor = isProduction
    ? `<link rel="stylesheet" href="${Path}css/vendor.css" />`
    : '';

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>App Name</title>
        ${link}
        ${linkVendor}
      </head>
      <body>
        <div id="root"></div>

        <script src="${Path}vendor.js"></script>
        <script src="${Path}main.js"></script>
      </body>
    </html>
  `;
};

const clientRender = () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    const path = ctx.request.path.split('.');

    if (path.length > 1) {
      await next();
    } else {
      const htmlTemplate = html();
      ctx.body = htmlTemplate;
    }
  };
};

export default clientRender;
