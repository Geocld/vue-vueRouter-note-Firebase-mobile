<template>
  <div class="popup edit-popup-catpopup">
    <div class="content-block">
      <div class="list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">标签</div>
                <div class="item-input">
                  <input type="text" placeholder="请输入标签名字" v-model="category_name">
                </div>
              </div>
            </div>
          </li>

          <li v-for="color in categoryColors">
            <label class="label-checkbox item-content">
              <input type="radio" value="{{ color }}" v-model="category_color">
              <div class="item-media"><i class="icon icon-form-checkbox"></i></div>
              <div class="item-inner">
                <div class="item-subtitle">
                  <div class="tag {{ color }}">标签</div>
                </div>
              </div>
            </label>
          </li>

        </ul>
      </div>

      <div class="content-block">
        <div class="row">
          <div class="col-50"><a class="button button-big button-fill button-success close-popup" @click="saveCat">保存</a></div>
          <div class="col-50"><a class="button button-big close-popup" @click="catCancel">取消</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  props: ['category_name', 'category_color'],
  data() {
    return {
      categoryColors: ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black']
    }
  },
  methods: {
    catCancel: function() {
      this.category_name = '';
      this.category_color = '';
    },
    saveCat: function() {
      var editedCategory = {};
      editedCategory[this.category_name] = this.category_color;
      store.editCategory(editedCategory, this.category_name, this.category_color);
      this.category_name = '';
      this.category_color = '';
      $.closeModal('.edit-popup-catpopup');
    }
  }
}
</script>
