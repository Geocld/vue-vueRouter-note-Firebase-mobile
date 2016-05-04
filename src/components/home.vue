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

  <div class="card" v-for="note in note_arr | limitBy 2">
      <div class="card-header"><a>{{note.title}}</a></div>
      <div class="card-content">
        <div class="card-content-inner">{{note.content}}</div>
      </div>
      <div class="card-footer">
        <div class="tag {{categories[note.category]}}">{{note.category}}</div>
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
    note_arr() {
	  var arr = [];
	  for (var i in this.notes) {
		if (this.notes.hasOwnProperty(i)) {
			arr.push(this.notes[i]);
		}
	  }
	  arr.sort(function(a, b) {
		return new Date(b.date.replace(/\s/ig,'T')) - new Date(a.date.replace(/\s/ig,'T'))
	  });
	  return arr;
	},
    noteCount() {
      return this.note_arr.length;
    },
    categoryCount() {
      var catArr = Object.keys(this.categories);
      return catArr.length;
    }
  }
}
</script>
