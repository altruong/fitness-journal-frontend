import { Box, Flex, Stack } from '@chakra-ui/react';
import { PostForm } from 'components/Post/PostForm';
import { usePostsQuery } from 'generated/graphql';
import { Navbar } from 'components/Navbar/Navbar';
import { Post } from 'components/Post/Post';
import { FlexContainer } from 'shared/FlexContainer';

const Index = () => {
  const { data } = usePostsQuery();

  return (
    <>
      <Navbar constrain />
      {/* TODO: Add an Edit toggle  */}
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
    </>
  );
};
export default Index;
