import { Project } from "../typings";
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

export const fetchProjects = async () => {
    const res = await sanityClient.fetch(groq`
    *[_type == "project"] {
     ...,
     technologies[]->
    }
 `);

    const projects: Project[] = res;
    
    return projects;
}