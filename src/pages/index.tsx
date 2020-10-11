import { Stack, Box, Flex } from '@chakra-ui/core';
import { Feature } from '../components/Post/Feature';
import { PostForm } from '../components/Post/PostForm';
import { usePostsQuery } from '../generated/graphql';

const Index = () => {
  const { data } = usePostsQuery();

  return (
    <Box>
      <PostForm />
      <Stack spacing={8}>
        {data?.posts.map((p) =>
          !p ? null : (
            <Flex key={p.id} mx='auto'>
              <Feature title={p.title} text={p.text} width={'800px'}></Feature>
            </Flex>
          )
        )}
      </Stack>
    </Box>
  );
};
export default Index;
