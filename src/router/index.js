
import VueRouter from "vue-router"

import hellow from "../pages/hellow.vue"
import blog from "../pages/blog.vue"
import visual from "../pages/visual.vue"
import game from "../pages/game.vue"
import canvas from "../pages/canvas.vue"
import juan from "../pages/juan.vue"
import video from "../pages/video.vue"

export default new VueRouter({
  mode:"hash",
  routes:[
    {
      path:"/",
      component:hellow,
      name:"hellow"
    },
    {
      path:"/blog",
      component:blog,
      name:"blog"
    },
    {
      path:"/visual",
      component:visual,
      name:"visual"
    },
    {
      path:"/game",
      component:game,
      name:"game"
    },
    {
      path:"/canvas",
      component:canvas,
      name:"canvas"
    },
    {
      path:"/juan",
      component:juan,
      name:"juan"
    },
    {
      path:"/video",
      component:video,
      name:"video"
    },
  ]
})


//取消重复报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}