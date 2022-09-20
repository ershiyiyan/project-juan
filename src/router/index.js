
import VueRouter from "vue-router"

import hellow from "../pages/hellow.vue"

export default new VueRouter({
  mode:"hash",
  routes:[
    {
      path:"/",
      component:hellow,
      name:"hellow"
    },

  ]
})


//取消重复报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}