import { Stack, Heading, Text } from '@chakra-ui/core';
import { PostForm } from '../components/PostForm';
import { usePostsQuery } from '../generated/graphql';

const Index = () => {
  const { data } = usePostsQuery();

  return (
    <>
      <PostForm />
      <Stack spacing={8}>
        {data!.posts.map((p) =>
          !p ? null : (
            <>
              <Heading>{p.title}</Heading>
              <Text>{p.text}</Text>
            </>
          )
        )}
      </Stack>
    </>
  );
};
export default Index;
