import { Skill } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

export const fetchSkills = async () => {
    const res = await sanityClient.fetch(groq`
    *[_type == "skill"]
 `);

    const skills: Skill[] = res;
    
    return skills;
}