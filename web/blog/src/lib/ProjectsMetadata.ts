import * as cheerio from "cheerio";

interface MetaData {
  title: string | null;
  description: string | null;
  image: string | null;
  imageSize: {
    width: string | null;
    height: string | null;
  };
}

export async function getMetaData(url: string): Promise<MetaData> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Altie122Bot/1.0 (https://www.altie122.xyz)",
      },
    });
    const html = await response.text();

    const $ = cheerio.load(html);

    // Build a map of meta tags for fast lookup
    const metaMap: Record<string, string> = {};
    $("meta").each((_, el) => {
      const $el = $(el);
      const property = $el.attr("property");
      const name = $el.attr("name");
      const content = $el.attr("content");
      if (property && content) metaMap[property] = content;
      if (name && content) metaMap[name] = content;
    });

    const title =
      metaMap["og:title"] ||
      $("title").first().text() ||
      null;

    const description =
      metaMap["og:description"] ||
      metaMap["description"] ||
      null;

    const image =
      metaMap["og:image"] ||
      metaMap["twitter:image"] ||
      null;

    const imageWidth =
      metaMap["og:image:width"] ||
      metaMap["twitter:image:width"] ||
      null;

    const imageHeight =
      metaMap["og:image:height"] ||
      metaMap["twitter:image:height"] ||
      null;

    return {
      title,
      description,
      image,
      imageSize: {
        width: imageWidth,
        height: imageHeight,
      },
    };
  } catch (error) {
    console.error("Error fetching or parsing the page:", error);
    return {
      title: null,
      description: null,
      image: null,
      imageSize: { width: null, height: null },
    };
  }
}