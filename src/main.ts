import {hookup} from 'named-logs-console';
import './service-worker-handler';
import App from './App.svelte';
import './TailwindCSS.svelte';

hookup();

const app = new App({
  target: document.body,
});

export default app;
