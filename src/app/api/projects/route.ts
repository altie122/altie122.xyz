import { getMetaData } from "@/lib/@www/projectsMetadata";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url).searchParams.get("url");
    
    if (!url) {
      return Response.json(
        { error: "URL parameter is required" }, 
        { status: 400 }
      );
    }

    const metadata = await getMetaData(url);
    
    return Response.json({
      success: true,
      data: metadata,
      url: url
    });
    
  } catch (error) {
    console.error("Metadata fetch error:", error);
    
    return Response.json(
      { 
        success: false, 
        error: "Failed to fetch metadata",
        message: error instanceof Error ? error.message : "Unknown error"
      }, 
      { status: 500 }
    );
  }
}