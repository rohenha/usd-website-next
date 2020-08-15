import { request } from "../lib/datocms";

const HOMEPAGE_QUERY = `query HomePage {
  team {
    name
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}
export default function Home({ data }) {
  return <div>{JSON.stringify(data, null, 2)}</div>;
}