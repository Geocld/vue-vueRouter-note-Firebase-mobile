<style>
.list-block {
	margin-top: 0;
}
</style>
<template>
 <div>
	<div class="list-block media-list">
      <ul>
        <li class="swipeout" v-for="(id, item) in notes | filterBytitle query | filterByCategory select_category">
          <div class="swipeout-content">
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title" @click="editNote(id,item)">
                  <a>{{ item.title }}</a>
                  </div>
                  <div class="item-after">
                    <div class="tag {{categories[item.category]}}">{{ item.category }}</div>
                  </div>
                </div>
                <div class="item-text">
                {{ item.content }}
                </div>
              </div>
            </div>
          </div>
          <div class="swipeout-actions-right">
            <a class="bg-success" @click="deleteNote(id)">删除</a>
            <a class="swipeout-close">关闭</a>
          </div>
        </li>
      </ul>
  </div>
</div>
</template>

<script>
import store from '../store/index.js'
import { tmp } from '../store/temp_store.js'
import { filterBytitle,filterByCategory} from '../filters'

export default {
  props: ['query','select_category','notes','categories'],
  filters: {
  	filterBytitle,
    filterByCategory
  },
  methods: {
  	editNote(id,item) {
  		tmp.note.id = id;
  		tmp.note.title = item.title;
  		tmp.note.content = item.content;
  		tmp.note.category = item.category;
  		this.$router.go('/editNote');
  	},
  	deleteNote(id) {
  		store.deleteNote(id);
  	}
  }
}
</script>
