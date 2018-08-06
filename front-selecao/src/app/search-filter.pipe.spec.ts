import { SearchFilterPipe } from './search-filter.pipe';
import { Alerta } from './alertas/alerta/alerta.model';
 
describe('Suíte de testes de filtro de busca', () => {
 
	let searchFilter: SearchFilterPipe;
 
	beforeEach(() => {
		searchFilter = new SearchFilterPipe();
	});
 
	it('deve retornar apenas Água da lista informada', () => {
		let alertas: Array<Alerta>;
		let alertasFiltro: Array<Alerta>;
		let alerta: Alerta;
		alertas = new Array();
		alertasFiltro = new Array();
		alerta = new Alerta();
        alerta.pontoDeVenda = "João de Bairro";
        alerta.descricao = "Teste";
        alerta.produto = "Refrigerante";
        alerta.flTipo = 1;
		alerta.margem = null;
		alertas.push(alerta);
		alerta = new Alerta();
        alerta.pontoDeVenda = "João de Bairro";
        alerta.descricao = "Teste";
        alerta.produto = "Cerveja";
        alerta.flTipo = 1;
		alerta.margem = null;
		alertas.push(alerta);
		alerta = new Alerta();
        alerta.pontoDeVenda = "João de Bairro";
        alerta.descricao = "Teste";
        alerta.produto = "Água";
        alerta.flTipo = 1;
		alerta.margem = null;
		alertas.push(alerta);
		alertasFiltro.push(alerta);
		expect(searchFilter.transform(alertas, 'Ág')).toEqual(alertasFiltro);
	});
 
	it('deve retornar a lista vazia quando não existe o filtro na lista', () => {
		let alertas: Array<Alerta>;
		let alertasFiltro: Array<Alerta>;
		let alerta: Alerta;
		alertas = new Array();
		alertasFiltro = new Array();
		alerta = new Alerta();
        alerta.pontoDeVenda = "João de Bairro";
        alerta.descricao = "Teste";
        alerta.produto = "Refrigerante";
        alerta.flTipo = 1;
		alerta.margem = null;
		alertas.push(alerta);
		alerta = new Alerta();
        alerta.pontoDeVenda = "João de Bairro";
        alerta.descricao = "Teste";
        alerta.produto = "Cerveja";
        alerta.flTipo = 1;
		alerta.margem = null;
		alertas.push(alerta);
		alerta = new Alerta();
        alerta.pontoDeVenda = "João de Bairro";
        alerta.descricao = "Teste";
        alerta.produto = "Água";
        alerta.flTipo = 1;
		alerta.margem = null;
		alertas.push(alerta);
		expect(searchFilter.transform(alertas, 'Chocolate')).toEqual(alertasFiltro);
	});
});