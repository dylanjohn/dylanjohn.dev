import { playlist } from '../../data';
// import { Box, Heading, Text, Button } from '@chakra-ui/core';
import Link from 'next/link';

export const getStaticProps = async ({ params }) => {
  const playlistList = playlist.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      song: playlistList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = playlist.map((song) => ({
    params: { id: song.id.toString() },
  }));

  return { paths, fallback: false };
};


const Song = ({ song }) => {
  return (
    <div>
      <h1>{song.name}</h1>
      <p>
        {song.artist}
      </p>
      <iframe
        width='100%'
        height='315'
        src={`https://www.youtube.com/embed/${song.youtubeID}`}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
      <Link href='/' passHref>
        <a as='a' mt={4} leftIcon='arrow-back'>
          Back
        </a>
      </Link>
    </div>
  );
};

export default Song;





