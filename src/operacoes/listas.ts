export function itensLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]){
    // se todos os itens da lista 1 estão na lista 2 a função retorna true
    return lista1.every((itemLista1) => lista2.includes(itemLista1));
}