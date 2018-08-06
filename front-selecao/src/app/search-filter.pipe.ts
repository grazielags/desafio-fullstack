import { Pipe, PipeTransform } from '@angular/core';

import {Alerta} from './alertas/alerta/alerta.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any[] {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item: any) => this.applyFilter(item, filter));
  }

  applyFilter(alerta: Alerta, filter: any): boolean {
      if (filter) {
        var searchText = filter;
        var search = new RegExp(searchText, 'i');
        return !searchText || search.test(alerta.pontoDeVenda)
        || search.test(alerta.descricao)
        || search.test(alerta.produto)
        || search.test(alerta.flTipo != null ? alerta.flTipo.toString() : "")
        || search.test(alerta.margem != null ? alerta.margem.toString() : "");
    }
    return true;
  }
}
