import { shallowMount } from '@vue/test-utils';
import Welcome from '@/views/Welcome.vue';

describe('Welcome.vue', () => {
  it('should render properly', () => {
    const welcome = shallowMount(Welcome);
    expect(welcome).toMatchSnapshot();
  });

  describe('Methods', () => {
    it('should redirect to pomodoro route with work parameter', () => {
      const routerPushSpy = jest.fn();

      const welcome = shallowMount(Welcome, {
        mocks: {
          $router: {
            push: routerPushSpy,
          },
        },
      });

      welcome.vm.onClick();

      expect(routerPushSpy).toHaveBeenCalledWith({
        name: 'pomodoro',
        params: {
          type: 'work',
        },
      });
    });
  });
});
