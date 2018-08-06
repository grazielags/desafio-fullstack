import { element, by } from 'protractor';

export class AlertasComponentsPage {
    qtdItens = element(by.id('qtdItens'));
    title = element.all(by.css('sel-alertas div h2#qtdItens')).first();

    getQtdItens(): any {
        return this.qtdItens;
    }

    getTitle(): any {
        return this.title.getAttribute('jhiTranslate');
    }
}
