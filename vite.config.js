import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
    fs: {
      allow: [
        '/robot-photos/*',
      ],
    },
  },
};

export default config;
