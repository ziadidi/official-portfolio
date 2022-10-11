import { PageInfo } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchPageInfo = async () => {
  const res = await sanityClient.fetch(groq`
  *[_type == "pageInfo"][0]`);

  const pageInfo: PageInfo = res;

  return pageInfo;
};

