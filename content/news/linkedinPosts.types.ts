/**
 * Data for rendering an embedded LinkedIn post.
 */
export type LinkedinPost = {
  /**
   * Arbitrary unique identifier for the LinkedIn post, set for the purposes of this project.
   *
   * Does not correspond to any LinkedIn-specific ID.
   *
   * Expected to be `001`, `002`, etc.
   *
   * Expected to be mainly used as a key when rendering lists of posts.
   */
  id: string;
  /**
   * The LinkedIn embed iframe src URL.
   * Extracted from the embed code provided by LinkedIn's "Embed this post" feature.
   */
  src: string;
  /**
   * The native height of the embed iframe in pixels, as specified in LinkedIn's embed code.
   */
  height: number;
}
