<template>
 <div>
  <div class="list-block contacts-block">
    <div class="list-group" v-for="(id, item) in catStore">
      <ul>
        <li class="list-group-title">{{ id }}</li>
        <li class="swipeout" v-for="(name, color) in item">
          <div class="swipeout-content">
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title"><a @click="selectCategory(name)">{{ name }}</a></div>
              </div>
            </div>
          </div>
          <div class="swipeout-actions-right">
            <a class="bg-success" @click="openPopup(name,color)">编辑</a>
            <a class="bg-danger" @click="deleteCategory(name)">删除</a>
            <a class="swipeout-close">取消</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import store from '../store'
export default {
  props: ['select_category','categories','category_name','category_color'],
  route: {
	deactivate: function() {
	  $('.index-list-bar').remove();
	}
  },
  ready() {
    $(".contacts-block").indexList();
  },
  computed: {
    catStore() {
      var store = {};
      for (var cat in this.categories) {
        var keyword_arr = cat.split('');
        var keyword = keyword_arr[0].toString();
        store[keyword] = {};
      }
      for (var catt in this.categories) {
        var keyword_arr = catt.split('');
        var keyword = keyword_arr[0].toString();
        store[keyword][catt] = this.categories[catt]
      }
      return store
    }
  },
  methods: {
    openPopup(name, color) {
      this.category_name = name;
      this.category_color = color;
      $.popup('.edit-popup-catpopup');
    },
    deleteCategory(name) {
      store.deleteCategory(name);
    },
    selectCategory(name) {
      this.select_category = name;
      $('.index-list-bar').remove();
      this.$router.go('/noteList');
    } 
  }
}
</script>
