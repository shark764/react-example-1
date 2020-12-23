import * as contentful from 'contentful';

export const BASE_URL = 'https://cdn.contentful.com';
export const ENVIRONMENT = 'master';
export const SPACE_ID = 'srlpekq85luo';
export const ACCESS_TOKEN = 'evMFF1eK--2PX6Qqrlq8glrKOurVH1pdvaI-FRgmufU';

export const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

export async function getEntries(query) {
  try {
    const entries = await client.getEntries(query);
    return dataTransformer(entries.items);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function dataTransformer(data) {
  return data.map(({ fields, sys }) => ({
    ...fields,
    id: sys.id,
    createdAt: sys.createdAt,
    image: {
      ...fields.image.fields,
      id: fields.image.sys.id,
    },
    tracklist: fields.tracklist.map((track) => ({
      ...track.fields,
      id: track.sys.id,
    })),
  }));
}
