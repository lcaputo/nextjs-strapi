import { API_URL } from "../config";

export async function getGames({ page = 1 }: { page: number }) {
  const res = await fetch(
    `${API_URL}/Videogames?populate=*&pagination[page]=${page}&pagination[pageSize]=1`
  );
  if (!res.ok) throw new Error(res.statusText);
  const { data, meta } = await res.json();
  const { pagination } = meta;
  return { data, pagination };
}
