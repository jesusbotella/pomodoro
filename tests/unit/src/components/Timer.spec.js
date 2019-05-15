import { shallowMount } from '@vue/test-utils';
import Timer from '@/components/Timer.vue';

jest.useFakeTimers();

function createTimerComponent(propsData = { time: 121 }) {
  return shallowMount(Timer, {
    propsData,
  });
}

describe('Timer.vue', () => {
  it('should render properly', (done) => {
    const timer = createTimerComponent();

    timer.vm.$nextTick()
      .then(() => {
        expect(timer).toMatchSnapshot();
        done();
      });
  });

  describe('Computed', () => {
    it('should return minutes properly and padded if necessary', () => {
      const timer = createTimerComponent();
      expect(timer.vm.minutes).toEqual('02');
    });

    it('should return seconds properly and padded if necessary', () => {
      const timer = createTimerComponent();
      expect(timer.vm.seconds).toEqual('01');
    });
  });

  describe('Methods', () => {
    describe('startCountdown', () => {
      it('should call onSecondElapse when a second passes', () => {
        const timer = createTimerComponent();
        const onSecondElapse = jest.spyOn(timer.vm, 'onSecondElapse');

        // Fast-forward until all timers have been executed
        jest.advanceTimersByTime(2000);

        expect(onSecondElapse).toHaveBeenCalledTimes(2);
      });

      it('should clear interval when time is 0', () => {
        const timer = createTimerComponent({ time: 1 });
        const onSecondElapse = jest.spyOn(timer.vm, 'onSecondElapse');

        // Fast-forward until all timers have been executed
        jest.advanceTimersByTime(2000);

        expect(onSecondElapse).toHaveBeenCalledTimes(1);
      });
    });

    describe('onSecondElapse', () => {
      it('should set a second less to timeInSeconds', () => {
        const seconds = 3;
        const timer = createTimerComponent({ time: seconds });

        timer.vm.onSecondElapse();

        expect(timer.vm.timeInSeconds).toEqual(seconds - 1);
      });
    });

    describe('setTime', () => {
      it('should set time in property to timeInSeconds', () => {
        const seconds = 2;
        const timer = createTimerComponent({ time: seconds });

        expect(timer.vm.timeInSeconds).toEqual(seconds);
      });
    });

    describe('getPaddedTime', () => {
      it('should return number value padded with 0', () => {
        const seconds = 5;
        const timer = createTimerComponent({ time: seconds });

        expect(timer.vm.getPaddedTime(5)).toEqual('05');
      });
    });
  });

  describe('Watch', () => {
    describe('time', () => {
      it('should call setTime when time property changes', () => {
        const timer = createTimerComponent();
        expect(timer.vm.timeInSeconds).toEqual(121);

        timer.setProps({
          time: 100,
        });

        expect(timer.vm.timeInSeconds).toEqual(100);
      });
    });
  });
});
