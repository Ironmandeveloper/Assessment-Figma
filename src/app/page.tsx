import Component from "./components";


export type ProfileType={
  name:string
  role:string
  experience:string
  skills: string[]
}

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default async function Home() {
  const res = await fetch(`${apiUrl}/api/staticData`);
  const profiles:ProfileType[] = await res.json();


  return (
   <Component profiles={profiles} />
  );
}
