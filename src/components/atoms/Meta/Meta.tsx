import Head from "next/head";
import { config } from "./Config";

const Meta = () => (
  <Head>
    <title key="title">{config.title}</title>

    <meta key="description" name="description" content={config.description} />
    <meta key="og:type" name="og:type" content={config.openGraph.type} />
    <meta key="og:title" name="og:title" content={config.openGraph.title} />
    <meta
      key="og:description"
      name="og:description"
      content={config.openGraph.description}
    />
    <meta key="og:url" name="og:url" content={config.openGraph.url} />
    <meta key="og:image" name="og:image" content={config.openGraph.image} />
  </Head>
);

export default Meta;
