export default {
  about: '/about',
  home: '/',

  user(user: string) {
    return {
      href: '/[user]',
      as: `/${user}`,
    };
  },
  dashboard: '/$[]',
};
