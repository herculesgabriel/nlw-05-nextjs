type HomeProps = {
  episodes: {
    id: string;
    title: string;
    members: string;
    published_at: string;
    thumbnail: string;
    description: string;
    file: {
      url: string;
      type: string;
      duration: number;
    };
  }[];
};

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>{props.episodes[0].title}</h1>
      <p>{props.episodes[0].description}</p>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  };
}
