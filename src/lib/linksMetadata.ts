/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as cheerio from "cheerio";

interface MetaData {
  favicon: string;
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
      const content = $el.attr("content") ?? $el.attr("href");
      if (property && content) metaMap[property] = content;
      if (name && content) metaMap[name] = content;
    });

    const favicon =
      metaMap.icon ??
      "https://www.altie122.xyz/icon.png";

    return {
      favicon,
    };
  } catch (error) {
    console.error("Error fetching or parsing the page:", error);
    return {
      favicon: "https://www.altie122.xyz/icon.png",
    };
  }
}