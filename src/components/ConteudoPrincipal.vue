<script lang="ts">
import BotaoPrincipal from './BotaoPrincipal.vue';
import Rodape from './Rodape.vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SuaLista from './SuaLista.vue';
import Tag from './Tag.vue';

export default {
    name: 'ConteudoPrincipal',
    components: {
    SelecionarIngredientes,
    Tag,
    SuaLista,
    Rodape,
    BotaoPrincipal
},
    data() {
        return {
            ingredientes: [] as string[],
        };
    },
    methods: {
        adicionarIngredientes(ingrediente: string){
            this.ingredientes.push(ingrediente);
        },
        removaIngredientes(ingrediente: string){
            const indice = this.ingredientes.indexOf(ingrediente);
            this.ingredientes.splice(indice, 1);
        }
    }
}
</script>

<template>
    <main class="conteudo-principal">
        <SuaLista :ingredientes="ingredientes"></SuaLista>
        <SelecionarIngredientes
        @adicionar-ingrediente="adicionarIngredientes($event)"
        @remova-ingrediente="removaIngredientes($event)"></SelecionarIngredientes>
        <BotaoPrincipal></BotaoPrincipal>
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