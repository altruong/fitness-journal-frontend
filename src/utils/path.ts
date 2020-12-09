export default {
  about: '/about',
  home: '/',

  program(user: string, program: string) {
    return {
      href: '/[user]/[program]',
      as: `/${user}/[program]`,
    };
  },
  dashboard: '/$[]',
};
