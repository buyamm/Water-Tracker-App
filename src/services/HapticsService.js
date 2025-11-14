import { Haptics, ImpactStyle } from '@capacitor/haptics';

export const HapticsService = {
  async vibrate() {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch (error) {
      console.log('Haptics not supported');
    }
  },

  async vibrateSuccess() {
    try {
      await Haptics.notification({ type: 'success' });
    } catch (error) {
      console.log('Haptics not supported');
    }
  }
};