<script lang="ts">
import Rodape from './Rodape.vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';
import MostrarReceitas from './MostrarReceitas.vue';

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas';

export default {
    name: 'ConteudoPrincipal',
    components: {
    SelecionarIngredientes,
    Tag,
    SuaLista,
    Rodape,
    MostrarReceitas
},
    data() {
        return {
            ingredientes: [] as string[],
            conteudo: 'SelecionarIngredientes' as Pagina,
        };
    },
    methods: {
        adicionarIngredientes(ingrediente: string){
            this.ingredientes.push(ingrediente);
        },
        removaIngredientes(ingrediente: string){
            const indice = this.ingredientes.indexOf(ingrediente);
            this.ingredientes.splice(indice, 1);
        },
        navegar(pagina: Pagina){
            this.$scrollTo('#top-of-page');
            this.conteudo = pagina;
        },
    }
}
</script>

<template>
    <div id="top-of-page"></div>
    <main class="conteudo-principal">
        <SuaLista :ingredientes="ingredientes"></SuaLista>
        <KeepAlive include="SelecionarIngredientes">
            <SelecionarIngredientes
                v-if="conteudo === 'SelecionarIngredientes'"
                @buscar-receitas="navegar('MostrarReceitas');"
                @adicionar-ingrediente="adicionarIngredientes($event)"
                @remova-ingrediente="removaIngredientes($event)">
            </SelecionarIngredientes>

            <MostrarReceitas
                v-else-if="conteudo === 'MostrarReceitas'"
                :ingredientes="ingredientes"
                @selecionar-ingredientes="navegar('SelecionarIngredientes');">
            </MostrarReceitas>
        </KeepAlive>
    </main>
    <Rodape></Rodape>
</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>