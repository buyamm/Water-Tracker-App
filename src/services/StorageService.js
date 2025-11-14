import { Preferences } from "@capacitor/preferences";

export const StorageService = {
  KEYS: {
    DAILY_TOTAL: "water_daily_total",
    HISTORY: "water_history",
    LAST_DATE: "water_last_date",
  },

  async getDailyTotal() {
    const { value } = await Preferences.get({ key: this.KEYS.DAILY_TOTAL });
    return value ? parseInt(value, 10) : 0;
  },

  async setDailyTotal(amount) {
    await Preferences.set({
      key: this.KEYS.DAILY_TOTAL,
      value: amount.toString(),
    });
  },

  async getHistory() {
    const { value } = await Preferences.get({ key: this.KEYS.HISTORY });
    return value ? JSON.parse(value) : [];
  },

  async addHistoryEntry(amount) {
    const history = await this.getHistory();
    const newEntry = {
      id: Date.now(),
      amount,
      timestamp: new Date().toISOString(),
    };
    history.unshift(newEntry);
    await Preferences.set({
      key: this.KEYS.HISTORY,
      value: JSON.stringify(history),
    });
  },

  async clearHistory() {
    await Preferences.remove({ key: this.KEYS.HISTORY });
  },

  async getLastDate() {
    const { value } = await Preferences.get({ key: this.KEYS.LAST_DATE });
    return value;
  },

  async setLastDate(date) {
    await Preferences.set({ key: this.KEYS.LAST_DATE, value: date });
  },

  async resetIfNewDay() {
    const today = new Date().toDateString();
    const lastDate = await this.getLastDate();

    if (lastDate !== today) {
      await this.setDailyTotal(0);
      await this.clearHistory();
      await this.setLastDate(today);
      return true;
    }
    return false;
  },
};
