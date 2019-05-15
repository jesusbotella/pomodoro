import { shallowMount, createLocalVue } from '@vue/test-utils';
import Router from 'vue-router';
import App from '@/App.vue';

const router = new Router();

const localVue = createLocalVue();
localVue.use(Router);

describe('App.vue', () => {
  it('should render properly', () => {
    const app = shallowMount(App, {
      localVue,
      router,
    });
    expect(app).toMatchSnapshot();
  });
});
