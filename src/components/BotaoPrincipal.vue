<script lang="ts">
export default{
    name: 'BotaoPrincipal',
}
</script>

<template>
    <button class="botao-receitas">
        Buscar receitas!
    </button>
</template>

<style scoped>
.botao-receitas{
    padding: 0.8rem 3rem;
    border-radius: 32px;
    background: var(--coral);
    box-shadow: 4px 4px 15px 0px #ff734c40;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    color: var(--creme);
    transition: 0.2s;
}
.botao-receitas:hover{
    cursor: pointer;
    background-color: var(--ocre);
}
</style>