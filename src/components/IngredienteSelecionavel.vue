<script lang="ts">
import Tag from './Tag.vue';

export default {
    name: 'IngredienteSelecionavel',
    components: { Tag },
    emits: ['adicionarIngrediente', 'removaIngrediente'],
    props: {
        ingrediente: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            selecionado: false,
        }
    },
    methods: {
        aoClicar(){
            this.selecionado = !this.selecionado;

            if(this.selecionado){
                this.$emit('adicionarIngrediente', this.ingrediente);
            }else{
                this.$emit('removaIngrediente', this.ingrediente);
            }
        }
    }
}
</script>

<template>
    <button class="ingrediente" @click="aoClicar" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado"></Tag>
    </button>
</template>

<style scoped>
    .ingrediente{
        cursor: pointer;
    }
</style>