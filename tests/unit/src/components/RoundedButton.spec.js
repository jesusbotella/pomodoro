import { shallowMount } from '@vue/test-utils';
import RoundedButton from '@/components/RoundedButton.vue';

function createRoundedButtonView() {
  return shallowMount(RoundedButton, {
    slots: {
      default: 'Haz tu primer pomodoro',
    },
  });
}

describe('RoundedButton.vue', () => {
  it('should render properly', () => {
    const roundedButton = createRoundedButtonView();
    expect(roundedButton).toMatchSnapshot();
  });

  describe('Methods', () => {
    describe('onClick', () => {
      it('should emit an event named click', () => {
        const roundedButton = createRoundedButtonView();

        roundedButton.find('.rounded-button').trigger('click');

        expect(roundedButton.emitted('click')).toBeTruthy();
      });
    });
  });
});
