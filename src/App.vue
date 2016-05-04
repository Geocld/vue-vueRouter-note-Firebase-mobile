<!--vue-router根组件-->
<style>
.expand-transition {
  transition: opacity .3s ease;
  overflow: hidden;
}
.expand-enter, .expand-leave {
  height: 0;
  opacity: 0;
}
</style>
<template>
<div>
  <div class="page">
    <!--header元素判断-->
    <header class="bar bar-nav">
      <!--/noteList-->
      <button class="button button-link button-nav pull-left" v-if="this.$route.path=='/noteList'" @click="gotoHome">
        <span class="icon icon-left"></span>
        返回
      </button>
      <button class="button button-link button-nav pull-right" v-link="'addNote'" v-if="this.$route.path=='/noteList'">
        添加
        <span class="icon icon-edit"></span>
      </button>

      <!--/editNote-->
      <button class="button button-link button-nav pull-left" v-link="'noteList'" v-if="this.$route.path=='/editNote'">
        <span class="icon icon-left"></span>
        全部笔记
      </button>
      <button class="button button-link button-nav pull-right" v-if="this.$route.path=='/editNote'" @click="saveNote">
        保存
      </button>

      <!--/addNote-->
      <button class="button button-link button-nav pull-left" v-link="'noteList'" v-if="this.$route.path=='/addNote'">
        <span class="icon icon-left"></span>
        返回
      </button>
      <button class="button button-link button-nav pull-right" v-if="this.$route.path=='/addNote'" @click="addNote">
        保存
      </button>

      <!--/categoryList-->
      <button class="button button-link button-nav pull-left" v-if="this.$route.path=='/categoryList'" @click="categoryListToHome">
        <span class="icon icon-left"></span>
        返回
      </button>
      <button class="button button-link button-nav pull-right" v-if="this.$route.path=='/categoryList'" @click="addCategory">
        添加
      </button>

      <h1 class="title">Vue</h1>
    </header>
    
    <!--search-->
    <div class="bar bar-header-secondary" v-if="this.$route.path=='/noteList'">
      <div class="searchbar">
        <a class="searchbar-cancel">取消</a>
        <div class="search-input">
          <label class="icon icon-search" for="search"></label>
          <input type="search" id='search' placeholder='请输入关键字' v-model="query"/>
        </div>
      </div>
    </div>

    <div class="content">
      <!--路由外链-->
      <router-view 
      transition="expand" 
      transition-mode="out-in"
      :notes="notes"
      :categories="categories"
      :query="query"
      :select_category.sync="select_category"
      :id.sync="id"
      :title.sync="title"
      :content.sync="content"
      :category.sync="category"
      :category_name.sync="category_name"
      :category_color.sync="category_color"
      ></router-view>
    </div>
  </div>

  <edit-category-popup :category_name="category_name" :category_color="category_color"></edit-category-popup>
  <add-category-popup></add-category-popup>
</div>
</template>

<script>
import moment from 'moment'
import store from './store/index.js'
import editCategoryPopup from './components/editCategoryPopup.vue'
import addCategoryPopup from './components/addCategoryPopup.vue'
export default {
  data () {
    return {
      categories: {},
      notes: {},
      query: '',
      select_category:'',
      id: '',
      title: '',
      content: '',
      category: '',
      category_name: '',
      category_color: ''
    }
  },
  components: {
    editCategoryPopup,
    addCategoryPopup
  },
  created() {
    //firebase的数据需要在app.vue根组件中created
    store.on('data-updated', this.updateListings)
  },
  ready() {
    //数据就绪后初始化light7
    $.init();
  },
  methods: {
    gotoHome: function() {
      this.select_category = '';
      this.$router.go('/home');
    },
    addNote: function() {
	  var now = moment().format('YYYY-MM-DD HH:mm');
      if (this.title === '') {
        this.title = now;
      }
      const newNote = {
        title: this.title,
        content: this.content,
        category: this.category,
		date: now
      };
      store.addNote(newNote);
      this.title = '';
      this.content = '';
      this.category = '';
      this.$router.go('/noteList');
    },
    saveNote: function() {
	  var now = moment().format('YYYY-MM-DD HH:mm');
      if (this.title === '') {
        this.title = now;
      }
      const editContent = {
        title: this.title,
        content: this.content,
        category: this.category,
		date: now
      };
      //console.log(this.id)
      store.editNote(this.id, editContent);
      this.id = '';
      this.title = '';
      this.content = '';
      this.category = '';
      this.$router.go('/noteList');
    },
    updateListings (categories, notes) {
      this.categories = categories;
      this.notes = notes;
    },
    categoryListToHome: function() {
      this.$router.go('/home');
    },
    addCategory: function() {
      this.$broadcast('add-category');
    }
  }
}
</script>
