import { mount } from '@vue/test-utils';
import Pomodoro from '@/views/pomodoro/Pomodoro.vue';
import RoundedButton from '@/components/RoundedButton.vue';
import PomodoroTypes from '@/views/pomodoro/pomodoroTypes';

function createPomodoroView(options = {}) {
  return mount(Pomodoro, {
    stubs: ['ion-icon'],
    mocks: {
      $route: {
        params: {
          type: 'work',
        },
      },
      ...options.mocks,
    },
  });
}

describe('Pomodoro.vue', () => {
  it('should render properly', () => {
    const pomodoro = createPomodoroView();
    expect(pomodoro).toMatchSnapshot();
  });

  describe('Computed', () => {
    describe('pomodoroType', () => {
      it('should return type parameter from route', () => {
        const pomodoro = createPomodoroView();
        expect(pomodoro.vm.pomodoroType).toEqual('work');
      });
    });

    describe('pomodoroTime', () => {
      it('should return type parameter from route', () => {
        const pomodoro = createPomodoroView();
        expect(pomodoro.vm.pomodoroTime).toEqual(PomodoroTypes.work.time);
      });
    });
  });

  describe('Methods', () => {
    describe('onClick', () => {
      it('should redirect to rest pomodoro when close button is clicked', () => {
        const onClickSpy = jest.fn();
        const pomodoro = createPomodoroView({
          mocks: {
            $router: {
              push: onClickSpy,
            },
          },
        });

        pomodoro.find(RoundedButton).trigger('click');

        expect(onClickSpy).toHaveBeenCalledWith(
          { name: 'pomodoro', params: { type: 'rest' } },
        );
      });
    });
  });
});
