<style>
.list-block {
	margin-top: 0;
}
</style>
<template>
 <div>
	<div class="list-block media-list">
      <ul>
        <li class="swipeout" v-for="note in note_arr | filterBytitle query | filterByCategory select_category">
          <div class="swipeout-content">
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title-row">
                  <div class="item-title" @click="editNote(note)">
                  <a>{{ note.title }}</a>
                  </div>
                  <div class="item-after">
                    <div class="tag {{categories[note.category]}}">{{ note.category }}</div>
                  </div>
                </div>
                <div class="item-text">
                {{ note.content }}
                </div>
              </div>
            </div>
          </div>
          <div class="swipeout-actions-right">
            <a class="bg-success" @click="deleteNote(note.id)">删除</a>
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
  computed: {
	note_arr() {
	  var arr = [];
	  for (var i in this.notes) {
		if (this.notes.hasOwnProperty(i)) {
			this.notes[i].id = i;
			arr.push(this.notes[i]);
		}
	  }
	  arr.sort(function(a, b) {
		return new Date(b.date.replace(/\s/ig,'T')) - new Date(a.date.replace(/\s/ig,'T'))
	  });
	  return arr;
	}
  },
  methods: {
  	editNote(note) {
  		tmp.note.id = note.id;
  		tmp.note.title = note.title;
  		tmp.note.content = note.content;
  		tmp.note.category = note.category;
  		this.$router.go('/editNote');
  	},
  	deleteNote(id) {
  		store.deleteNote(id);
  	}
  }
}
</script>
