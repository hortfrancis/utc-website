/** 
 * Simple object, to be used to render embedded LinkedIn posts, as iframe elements. 
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
   * The raw embed code for the LinkedIn post, as provided by LinkedIn's "Embed this post" feature.
   * 
   * Expected to be a string containing an `<iframe>` HTML element.
   */
  embedCode: string;
}