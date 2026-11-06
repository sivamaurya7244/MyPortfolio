# React + Vite

## Contact form setup

The contact form uses [Web3Forms](https://web3forms.com/) (free plan: 250 submissions/month). Create a form/access key there using `shivammaurya3659@gmail.com` as the receiving email, then copy `.env.example` to a file named `.env` (not `.env.example`) and set `VITE_WEB3FORMS_ACCESS_KEY` to that key. Restart the Vite server after changing the environment file. For a hosted site, add the same variable in the hosting provider's environment/build settings and trigger a new deployment. The key is intended to be public in a client-side app; do not put private credentials in this variable.

The form only shows its success message when Web3Forms returns `success: true`. If submission succeeds but no email arrives, check Spam/Promotions and the Web3Forms account email configuration.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
