import Prismic from "prismic-javascript";

export default async (ctx, inject) => {
  try {
    const prismicApi = "<%= options.baseURL %>";

    if (prismicApi) {
      const prismicRequest = await Prismic.getApi(prismicApi);

      const prismic = Object.assign(prismicRequest, Prismic);

      // Inject prismic to the context as $prismic
      ctx.$prismic = prismic;
      inject("prismic", prismic);
    }
  } catch (err) {
    ctx.error({
      statusCode: 404,
      message: "There was an error talking to the API, please try again later."
    });
  }
};
