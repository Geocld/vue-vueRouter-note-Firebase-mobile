<style>
.content_area {
  min-height: 400px;
}
</style>
<template>
 <div>
	<div class="content">
    <div class="list-block">
      <ul>
        <!--title-->
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title label">标题</div>
              <div class="item-input">
                <input type="text" placeholder="请输入标题" v-model="title">
              </div>
            </div>
          </div>
        </li>
        <!--select-->
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title label">标签</div>
              <div class="item-input">
                <select v-model="category">
                  <option v-for="(name,color) in categories">{{name}}</option>
                </select>
              </div>
            </div>
          </div>
        </li>
        <!--textarea-->
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-input">
                <textarea class="content_area" placeholder="请输入内容" v-model="content"></textarea>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>


<script>
import {tmp} from '../store/temp_store.js'

export default {
  props: ['categories','id','title','content','category'],
  data() {
  	return {
  		
  	}
  },
  ready() {
    this.title = tmp.note.title;
    this.content = tmp.note.content;
    this.category = tmp.note.category;
    this.id = tmp.note.id;
  }
}
</script>
