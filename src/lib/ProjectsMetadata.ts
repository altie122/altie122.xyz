// @ts-nocheck it works trust
import { JSDOM } from "jsdom";

interface MetaData {
  title: string | null;
  description: string | null;
  image: string | null;
  imageSize: {
    width: string | null;
    height: string | null;
  };
  versionId: string | null;
}

/**
 * Gets the metadata of a page
 * @param url url of the page
 * @returns MetaData object with the title, description, image, image size (object of width and height), and versionId of the page
 */
export async function getMetaData(url: string): Promise<MetaData> {
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Altie122Bot/1.0 (https://www.altie122.xyz)",
      },
    });
    const html = await response.text();

    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const title =
      doc.querySelector("title")?.textContent ||
      doc.querySelector('meta[property="og:title"]')?.content ||
      null;

    const description =
      doc.querySelector('meta[name="description"]')?.content ||
      doc.querySelector('meta[property="og:description"]')?.content ||
      null;

    const image =
      doc.querySelector('meta[property="og:image"]')?.content ||
      doc.querySelector('meta[name="twitter:image"]')?.content ||
      null;

    const imageWidth =
      doc.querySelector('meta[property="og:image:width"]')?.content ||
      doc.querySelector('meta[name="twitter:image:width"]')?.content ||
      null;

    const imageHeight =
      doc.querySelector('meta[property="og:image:height"]')?.content ||
      doc.querySelector('meta[name="twitter:image:height"]')?.content ||
      null;

    const versionId =
      doc.querySelector('meta[name="versionId"]')?.content || null;

    const metaData: MetaData = {
      title: title,
      description: description,
      image: image,
      imageSize: {
        width: imageWidth,
        height: imageHeight,
      },
      versionId: versionId,
    };

    return metaData;
  } catch (error) {
    console.error("Error fetching or parsing the page:", error);
    return {
      title: null,
      description: null,
      image: null,
      imageSize: { width: null, height: null },
      versionId: null,
    }; // Return a default object with null values on error
  }
}
