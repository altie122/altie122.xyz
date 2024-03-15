import { db, Authors, like } from "astro:db";

export async function GetAuthor(authorid: string) {
  const AuthorList = await db
    .select()
    .from(Authors)
    .where(like(Authors.id, authorid));
  return AuthorList[0];
}
