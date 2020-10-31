<template>
  <div class="dashboard-editor-container">
    <div class="draft-grid">
      <div class="item item1">是否党委规范性文件</div>
      <div class="item item2">(</div>
      <div class="item item3">abc</div>
      <div class="item item4">)</div>
      <div class="item item5">中共中国银行保险监督管理委员会发文稿纸</div>
      <div class="item item6">密级</div>
      <div class="item item7">(</div>
      <div class="item item8">密级</div>
      <div class="item item9">)</div>
      <div class="item item10">缓急</div>
      <div class="item item11">(</div>
      <div class="item item12">缓急</div>
      <div class="item item13">)</div>
      <div class="item item14">
        <div>会党委领导同志签发</div>
        <div>领导批示</div>
        <el-input type="area" />
      </div>
      <div class="item item15">项目15</div>
      <div class="item item16">项目16</div>
      <div class="item item17">项目17</div>
      <div class="item item18">项目18</div>
      <div class="item item19">项目19</div>
      <div class="item item20">项目20</div>
      <div class="item item21">项目21</div>
      <div class="item item22">
        <div>22</div>
        <div>22</div>
        <div>22</div>
        <div>22</div>
      </div>
      <div class="item item23">项目23</div>
      <div class="item item24">项目24</div>
      <div class="item item25">项目25</div>
      <div class="item item26">项目26</div>
      <div class="item item27">项目27</div>
      <div class="item item28">项目28</div>
      <div class="item item29">项目29</div>
      <div class="item item30">项目30</div>
      <div class="item item31">项目31</div>
      <div class="item item32">项目32</div>
      <div class="item item33">项目33</div>
      <div class="item item34">项目34</div>
      <div class="item item35">项目35</div>
      <div class="item item36">项目36</div>
      <div class="item item37">项目37</div>
      <div class="item item38">项目38</div>
      <div class="item item39">项目39</div>
      <div class="item item40">项目40</div>
      <div class="item item41">项目41</div>
    </div>
    <div class="draft-grid-test">
      <div v-for="li in list" :key="li.gridArea" :style="[{gridArea: li.gridArea}, li.style]">
        <i v-if="!li.componentName">{{ li.name }}</i>
        <component :is="li.componentName" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import Test1 from '@/views/dashboard/admin/test1'
import Test2 from '@/views/dashboard/admin/test2'
export default {
  components: { Test2, Test1 },
  data() {
    return {
      list: [
        {
          name: '1',
          gridArea: '1/1/2/25',
          componentName: 'test1',
          style: {
            textAlign: 'right'
          }
        },
        {
          name: '1',
          gridArea: '2/1/4/19',
          componentName: 'test2',
        },
        {
          name: '1',
          gridArea: '2/19/3/25'
        },
        {
          name: '1',
          gridArea: '3/19/4/25'
        }
      ]
    }
  },
  mounted() {
    // console.log([1, 2, 3] == [1, 3, 2])
    console.log(new Map())
  },
  methods: {

  }

}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 20px;
  .draft-grid{
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: var(--row-height) auto;
    background-color: red;
    border: 1px solid red;
    align-items: center;
    text-align: center;
    grid-gap: 1px;
    >div{
      padding: 5px;
      background-color: #fff;
      height: 100%;
      line-height: var(--row-height);
    }
    >div:nth-of-type(1){
      grid-column: 20 span;
      text-align: right;
    }
    >div:nth-of-type(3){
      grid-column: 2 span;
      text-align: center;
    }
    >div:nth-of-type(-n + 4){
      background-color: yellow;
    }

    >div:nth-of-type(5){
      grid-column: 1/21;
      grid-row: 2 span ;
      font-size: 36px;
      color: red;
      line-height: calc(var(--row-height)*2);
    }
    @for $i from 14 through 21{
      >div:nth-of-type(#{$i}){
        grid-column: 8 span;
        height: calc(var(--row-height)*3);
        text-align: left;
        line-height: 1em;
        >div:first-of-type{
          color: red;
          border-bottom: 1px solid gray;
        }
      }
    }
    >div:nth-of-type(22){
      grid-column: 4 span;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1px;
      background-color: red;
      padding: 0;
      >div{
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    >div:nth-of-type(23){
      grid-column: 4 span;
    }
    @for $i from 12 through 16{
      >div:nth-of-type(#{$i*2+1}){
        grid-column: 20 span;
      }
      >div:nth-of-type(#{$i*2}){
        grid-column: 4 span;
      }
    }
    >div:nth-of-type(n+34){
      grid-column: 3 span;
    }

  }
  .draft-grid-test{
    margin-top: 200px;
    margin-bottom: 200px;
    @extend .parent-grid;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
