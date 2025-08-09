const Head = () => (
  <>
    <title>Champs Corner</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />

    {/* Google tag (gtag.js) */}
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-757002568"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-757002568');
        `,
      }}
    />
  </>
);

export default Head;
