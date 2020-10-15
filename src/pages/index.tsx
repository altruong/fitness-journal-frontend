import { Stack, Box, Flex, Center } from '@chakra-ui/core';
import { Post } from '../components/Post/Post';
import { PostForm } from '../components/Post/PostForm';
import { usePostsQuery } from '../generated/graphql';

const Index = () => {
  const { data } = usePostsQuery();

  return (
    <Box mt={8} mx='auto' maxW={'800px'}>
      <PostForm />
      <Stack spacing={8}>
        {data?.posts.map((p) =>
          !p ? null : (
            <Flex key={p.id}>
              <Post
                postId={p.id}
                title={p.title}
                text={p.text}
                width={'800px'}
              ></Post>
            </Flex>
          )
        )}
      </Stack>
    </Box>
  );
};
export default Index;
