<script lang="ts">
import {itensLista1EstaoEmLista2} from '@/operacoes/listas';
import BotaoPrincipal from './BotaoPrincipal.vue';
import type ICategoria from '@/interfaces/ICategoria';
import { obterReceitas } from '@/http/index';
import SemReceitas from './SemReceitas.vue';
import CardReceita from './CardReceita.vue';
import type { PropType } from 'vue';

export default {
    name: 'MostrarReceitas',
    emits: ['SelecionarIngredientes'],
    components: { BotaoPrincipal, SemReceitas, CardReceita },
    props: {
        ingredientes: {
            type: Array as PropType<string[]>,
            required: true
        }
    },
    data() {
        return {
            receitasEncontradas: [] as ICategoria[]
        };
    },
    async created(){
        const receitas = await obterReceitas();
        this.receitasEncontradas = receitas.filter((receita) => {
            return itensLista1EstaoEmLista2(receita.ingredientes, this.ingredientes);
        })
    },
    methods: {
    }
}
</script>

<template>
    <section class="mostrar-receitas">
        <h1 class="cabecalho titulo-ingredientes mb-1">Receitas</h1>
        <p class="paragrafo-lg qtd-receitas">
            Resultados encontrados: {{ receitasEncontradas.length }}
        </p>
        <p v-if="receitasEncontradas.length > 0" class="paragrafo-lg">
            Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
        </p>
        <SemReceitas v-else />
        <ul class="receitas">
            <li v-for="(receita, key) in receitasEncontradas" :key="key">
                <CardReceita :receita="receita" />
            </li>
        </ul>

        <BotaoPrincipal
            text="Editar lista"
            @click="$emit('SelecionarIngredientes')">
        </BotaoPrincipal>
    </section>
</template>

<style scoped>
.receitas {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}
.mb-1{
    margin-bottom: 1rem;
}
.qtd-receitas {
    color: var(--verde-medio);
}
.mostrar-receitas {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}
</style>