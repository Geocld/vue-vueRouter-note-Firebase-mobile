<template>
  <div class="popup add-popup-catpopup">
    <div class="content-block">
      <div class="list-block">
        <ul>
          <li>
            <div class="item-content">
              <div class="item-inner">
                <div class="item-title label">标签</div>
                <div class="item-input">
                  <input type="text" placeholder="请输入标签名字" v-model="catName">
                </div>
              </div>
            </div>
          </li>

          <li v-for="color in categoryColors">
            <label class="label-checkbox item-content">
              <input type="radio" value="{{ color }}" v-model="catColor">
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
          <div class="col-50"><a class="button button-big button-fill button-success" @click="addCategory">保存</a></div>
          <div class="col-50"><a class="button button-big close-popup" @click="catCancel">取消</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  data() {
    return {
      catName: '',
      catColor: '',
      categoryColors: ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black']
    }
  },
  methods: {
    catCancel: function() {
      this.catName = '';
      this.catColor = '';
    },
    addCategory: function() {
      var newCategory = {};
      newCategory[this.catName] = this.catColor;
      store.addCategory(newCategory);
      $.closeModal('.add-popup-catpopup');
    }
  },
  events: {
    'add-category': function() {
      this.catName = this.catColor = '';
      $.popup('.add-popup-catpopup');
    }
  }
}
</script>
