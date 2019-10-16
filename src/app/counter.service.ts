export class CounterService {

  private activeToInactiveCount = 0;
  private inactiveToActiveCount = 0;

  constructor() { }

  getActiveToInactiveCount() {
    return this.activeToInactiveCount;
  }

  getInactiveToActiveCount() {
    return this.inactiveToActiveCount;
  }

  countActiveToInactive() {
    ++this.activeToInactiveCount;
    console.log(`active -> inactive: ${this.activeToInactiveCount}`);
  }

  countInactiveToActive() {
    ++this.inactiveToActiveCount;
    console.log(`inactive -> active: ${this.inactiveToActiveCount}`);
  }
}
