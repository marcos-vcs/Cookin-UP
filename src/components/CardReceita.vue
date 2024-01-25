<script lang="ts">
import type { PropType } from 'vue';
import type ICategoria from '@/interfaces/ICategoria';

export default {
    name: 'CardReceita',
    props: {
        receita: {
            type: Object as PropType<ICategoria>,
            required: true
        }
    }
}
</script>

<template>
    <article class="card-receita">
        <header>
            <img class="card-imagem" :src="`/imagens/receitas/${receita.imagem}`" alt="">
        </header>
        <p class="card-titulo">
            {{ receita.nome }}
        </p>
    </article>
</template>

<style scoped>
.card-receita {
    display: flex;
    width: 282px;
    height: 246px;
    max-width: 312px;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background: var(--branco);
    box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.card-imagem{
    width: 282px;
    height: 150px;
    object-fit: cover;
    border-radius: 16px 16px 0px 0px;
}

.card-titulo{
    width: 100%;
    height: calc(100% - 150px);
    color: var(--cinza);
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>