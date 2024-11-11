import { pb } from "./pocketbase";
import type { BlogPost } from "../types/blog";

interface GetPostsOptions {
  page?: number;
  perPage?: number;
}

export const api = {
  async getPosts({ page = 1, perPage = 10 }: GetPostsOptions = {}) {
    return await pb.collection("posts").getList<BlogPost>(page, perPage, {
      sort: "-created",
      filter: "published = true",
    });
  },

  async getPost(slug: string): Promise<BlogPost | null> {
    try {
      const records = await pb.collection("posts").getFullList<BlogPost>({
        filter: `slug = "${slug}" && published = true`,
      });
      return records[0] || null;
    } catch (error) {
      console.error("Error fetching post:", error);
      return null;
    }
  },
};
