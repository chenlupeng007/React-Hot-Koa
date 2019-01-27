const isProduction = process.env.NODE_ENV === 'production';

const html = () => {
  const link = isProduction ? `<link rel="stylesheet" href="css/main.css" />` : '';

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>App Name</title>
        ${link}
      </head>
      <body>
        <div id="root"></div>

        <script src="vendor.js"></script>
        <script src="main.js"></script>
      </body>
    </html>
  `;
}

const clientRender = () => {
  return async (ctx, next) => {
    const path = ctx.request.path.split('.');

    if (path.length > 1) {
      await next()
    }
    else {
      const htmlTemplate = html();
      ctx.body = htmlTemplate;
    }
  }
}

export default clientRender;