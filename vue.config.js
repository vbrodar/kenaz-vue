module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/footer.scss";
        @import "@/style/header.scss";
        @import "@/style/sidebar.scss";
        @import "@/style/style.scss";
         `,
      },
    },
  },
};
