export default {
  about: '/about',
  register: '/register',
  login: '/login',
  home: '/',

  program(user: string, program: string) {
    return {
      href: '/[user]/[program]',
      as: `/${user}/${program}`,
    };
  },
  dashboard: '/$[]',
};
