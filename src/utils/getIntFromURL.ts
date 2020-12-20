import { useRouter } from 'next/router';

export const getIntFromURL = (param: string): number => {
  const router = useRouter();
  const id = router.query[param];
  const intId = typeof id === 'string' ? parseInt(id) : -1; // -1 to check and pause query
  return intId;
};
