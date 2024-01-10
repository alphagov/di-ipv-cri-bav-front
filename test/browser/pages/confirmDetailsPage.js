module.exports = class PlaywrightDevPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.path = "/confirm-details";
  }

  async isCurrentPage() {
    const { pathname } = new URL(this.page.url());
    return pathname === this.path;
  }

  async back() {
    await this.page.click("#back");
  }

  async goBack() {
    await this.page.goBack();
  }

  async clickChangeLink() {
    await this.page
      .locator('[href*="/enter-account-details/edit"]')
      .first()
      .click();
  }

  async clickCannotProvideUkAccDetails() {
    await this.page.click('[href*="/cannot-proceed"]');
  }

  async clickSubmitDetailsButton() {
    await this.page.locator("#submitDetails").click();
  }

  async getSavedSC() {
    const sort_code = this.page.locator("dd.govuk-summary-list__value").nth(1);
    let scValue = await sort_code.textContent();
    scValue = scValue.trim();
    return scValue;
  }

  async getSavedAccNo() {
    const accNo = this.page.locator(".govuk-summary-list__value").nth(2);
    let accNoValue = await accNo.textContent();
    accNoValue = accNoValue.trim();
    return accNoValue;
  }
};
