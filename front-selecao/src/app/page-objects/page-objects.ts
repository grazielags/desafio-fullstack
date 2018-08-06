import { element, by } from 'protractor';

export class NavBarPage {
    clickOnMenu(entityName: string) {
        return element(by.css('ng-reflect-router-link=/"' + entityName + '"')).click();
    }

    goToMenu(entityName: string) {
        return this.clickOnMenu(entityName);
    }
}
