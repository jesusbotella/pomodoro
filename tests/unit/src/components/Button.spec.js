import { shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

function createButtonView() {
  return shallowMount(Button, {
    slots: {
      default: 'Haz tu primer pomodoro',
    },
  });
}

describe('Button.vue', () => {
  it('should render properly', () => {
    const button = createButtonView();
    expect(button).toMatchSnapshot();
  });

  describe('Methods', () => {
    describe('onClick', () => {
      it('should emit an event named click', () => {
        const button = createButtonView();

        button.find('.button').trigger('click');

        expect(button.emitted('click')).toBeTruthy();
      });
    });
  });
});
