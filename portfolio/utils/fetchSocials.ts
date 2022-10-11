import { Social } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

export const fetchSocials = async () => {
    const res = await sanityClient.fetch(groq`
    *[_type == "social"]
 `);

    const socials: Social[] = res;
    
    return socials;
}