<template>
  <div class="test1">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</template>

<script>
export default {
  name: 'Test1'
//  子网格,也有关键属性,就是高度grid-template-rows: H;
}
</script>

<style lang="scss" scoped>
.test1{
  @extend .child-grid;
  >div:nth-of-type(1){
    grid-area: 1/1/2/19;
  }
  >div:nth-of-type(2){
    grid-area: 1/19/2/21;
  }
  >div:nth-of-type(3){
    grid-area: 1/21/2/23;
  }
  >div:nth-of-type(4){
    grid-area: 1/23/2/25;
  }
}
</style>
