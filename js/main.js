(function() {
  'use strict';

  var vm = new Vue({
    el: '#app',
    data: {
      // v-modelの値を受け取る
      newItem: '',
      todos: [{
        title: 'task 1',
        isDone: false
      },{
        title: 'task 2',
        isDone: false
      },{
        title: 'task 3',
        isDone: true
      }
      ]
    },
    methods: {
      // preventDefaultでSubmit後きちんと動くようにする
      // addItem: function(e) {
      //   e.preventDefault();
      //   this.todos.push(this.newItem);
      // }
      addItem:function() {
        var item = {
          // v-modelから値取得
          title: this.newItem,
          isDone: false
        }
        this.todos.push(item);
        //this.todos.push(this.newItem);
        // 値を初期化する
        this.newItem = '';
      },
      deleteItem:function(index) {
        if (confirm('are you sure?')) {
          // 削除メソッド splice
          this.todos.splice(index, 1);
        }
      }
    }
  });
})();