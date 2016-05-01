import { EventEmitter } from 'events'
import Firebase from 'firebase'

//实例化Firebase
const db = new Firebase("https://geocld-app1.firebaseio.com/")
//获取categories和notes的目录链接
const categoriesRef = db.child('categories')
const notesRef = db.child('notes')

//实例化EventEmitter事件触发器
const store = new EventEmitter()

let categories = {}
let notes = {}

export default store

db.on('value', (snapshot) => {
	var noteData = snapshot.val();
	if (noteData) {
		categories = noteData.categories;
		notes = noteData.notes;
		//当数据库categories和notes更新时出发data-updated事件
		store.emit('data-updated', categories, notes);
	}
})

store.addCategory = (category) => {
  categoriesRef.update(category)
}

store.editCategory = (category, category_name, old_name) => {
  if (category_name === old_name) {
  	categoriesRef.child(category_name).set(category[category_name])
  }
  else {
  	categoriesRef.update(category);
  	for (var key in notes) {
	    if (notes[key].category === old_name) {
	      notesRef.child(key).update({category: category_name})
	    }
	  }
	categoriesRef.child(old_name).remove();
  }
}

store.deleteCategory = (catName) => {
  // first check if an 'Uncategorized' category exists, if not, create it
  if (!('Uncategorized' in categories)) {
    categoriesRef.update({'Uncategorized': 'white'})
  }

  for (var key in notes) {
    if (notes[key].category === catName) {
      notesRef.child(key).update({category: 'Uncategorized'})
    }
  }
  categoriesRef.child(catName).remove()
}

store.editNote = (noteId, content) => {
	notesRef.child(noteId).update(content);
}

store.addNote = (note) => {
	notesRef.push(note);
}

store.deleteNote = (noteId) => {
	notesRef.child(noteId).remove();
}