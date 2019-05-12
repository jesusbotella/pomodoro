import { mount, createLocalVue } from '@vue/test-utils';
import Timer from '@/components/Timer.vue';

jest.useFakeTimers();

const localVue = createLocalVue();

describe('Timer.vue', () => {
  it('should render properly', () => {
    const timer = mount(Timer, {
      propsData: {
        time: 121,
      },
      localVue,
    });

    // timer.vm.mounted();

    expect(timer).toMatchSnapshot();
  });
});
