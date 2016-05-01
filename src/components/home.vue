<template>
<!--每个组件最外层需要使用div包括，否则vue-router过场动画会失效-->
<div>
  <div class="card">
      <div class="card-content">
        <div class="list-block">
          <ul>
            <li>
              <a class="item-link item-content" v-link="'noteList'">
                <div class="item-inner">
                  <div class="item-title">笔记</div>
                  <div class="item-after">全部{{ noteCount }}</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
  </div>

  <div class="card" v-for="(id, item) in notes" v-if="$index<2">
      <div class="card-header"><a>{{item.title}}</a></div>
      <div class="card-content">
        <div class="card-content-inner">{{item.content}}</div>
      </div>
      <div class="card-footer">
        <div class="tag {{categories[item.category]}}">{{item.category}}</div>
      </div>
  </div>


  <div class="card">
      <div class="card-content">
        <div class="list-block">
          <ul>
            <li>
              <a class="item-link item-content" v-link="'categoryList'">
                <div class="item-inner">
                  <div class="item-title">标签</div>
                  <div class="item-after">全部{{ categoryCount }}</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import store from '../store/index.js'

export default {
  props: ['notes','categories'],
  data () {
  	return {
      count: ''
  	}
  },
  computed: {
    noteCount() {
      var noteArr = Object.keys(this.notes);
      return noteArr.length;
    },
    categoryCount() {
      var catArr = Object.keys(this.categories);
      return catArr.length;
    }
  }
}
</script>
