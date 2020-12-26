import * as contentful from 'contentful';
import * as contentfulManagement from 'contentful-management';

export const BASE_URL = 'https://cdn.contentful.com';
export const ENVIRONMENT = 'master';
export const SPACE_ID = 'srlpekq85luo';
export const ACCESS_TOKEN = 'evMFF1eK--2PX6Qqrlq8glrKOurVH1pdvaI-FRgmufU';
export const ACCESS_TOKEN_MANAGEMENT =
  'CFPAT-WAjUteVc06b2IhNAw7_DXGQUXCmv0ZMc6_m9obcABag';

export const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

const clientManagement = contentfulManagement.createClient({
  accessToken: ACCESS_TOKEN_MANAGEMENT,
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
  return data.map(entryTransformer);
}

export function entryTransformer({ fields, sys }) {
  return {
    ...fields,
    id: sys.id,
    createdAt: sys.createdAt,
  };
}

export function createEntry(values) {
  return (
    clientManagement
      .getSpace(SPACE_ID)
      .then((space) => space.getEnvironment(ENVIRONMENT))
      .then((environment) =>
        environment.createEntry('users', formatBody(values))
      )
      /**
       * Entry will be added as a draft,
       * until we publish it
       */
      .then((entry) => entry.publish())
      .then(createdEntryTransformer)
      .catch(console.error)
  );
}

export function createdEntryTransformer({ fields, sys }) {
  let formattedFields = {};
  Object.entries(fields).forEach(([key, value]) => {
    formattedFields[key] = value['en-US'];
  });
  return {
    ...formattedFields,
    id: sys.id,
    createdAt: sys.createdAt,
  };
}

function formatBody(values) {
  const entries = Object.entries(values);
  let fields = {};
  entries.forEach(([key, value]) => {
    fields[key] = {
      'en-US': value,
    };
  });
  return { fields };
}

export async function getAssets() {
  try {
    const entries = await client.getAssets();
    return assetTransformer(entries.items);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function assetTransformer(data) {
  return data
    .filter(
      (asset) =>
        asset.fields.file &&
        asset.fields.file.contentType.toLowerCase().includes('image/')
    )
    .map(imageTransformer);
}

export function imageTransformer({ fields, sys }) {
  return {
    ...fields,
    id: sys.id,
    createdAt: sys.createdAt,
  };
}
