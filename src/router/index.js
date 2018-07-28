import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import NotFound from '@/components/pages/NotFound'
import Authjoglist from '@/components/pages/Authjoglist'
import AdminLogin from '@/components/admin/AdminLogin'
import AdminDashboard from '@/components/admin/AdminDashboard'
import Events from '@/components/admin/Events'
import Craft from '@/components/admin/Craft'
import Culinary from '@/components/admin/Culinary'
import ChangePassword from '@/components/admin/ChangePassword'
import DashboardHome from '@/components/admin/DashboardHome'
import AddEvents from '@/components/admin/AddEvents'
import AddCraft from '@/components/admin/AddCraft'
import AddCulinary from '@/components/admin/AddCulinary'
import EditEvents from '@/components/admin/EditEvents'
import EditCraft from '@/components/admin/EditCraft'
import EditCulinary from '@/components/admin/EditCulinary'
import EventsDetails from '@/components/admin/EventsDetails'
import CraftDetails from '@/components/admin/CraftDetails'
import CulinaryDetails from '@/components/admin/CulinaryDetails'
import DetailsEvents from '@/components/pages/DetailsEvents'
import DetailsCulinary from '@/components/pages/DetailsCulinary'
import DetailsCraft from '@/components/pages/DetailsCraft'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/discover',
      name: 'discover',
      component: Authjoglist
    },
    {
      path: '/admin',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/details/event/:id',
      name: 'DetailsEvents',
      component: DetailsEvents
    },
    {
      path: '/details/culinary/:id',
      name: 'DetailsCulinary',
      component: DetailsCulinary
    },
    {
      path: '/details/craft/:id',
      name: 'DetailsCraft',
      component: DetailsCraft
    },
    {
      path: '/admin/dashboard',
      name: 'AdminDashboard',
      component: AdminDashboard,
      meta:{
        requiresAuth: true
      },
      children: [
        {
          name: 'dashboard',
          path: '',
          component: DashboardHome
        },
        {
          name: 'change-password',
          path: 'change-password',
          component: ChangePassword
        },
        {
          name: 'events',
          path: 'events',
          component: Events
        },
        {
          name: 'crafts',
          path: 'crafts',
          component: Craft
        },
        {
          name: 'culinary',
          path: 'culinary',
          component: Culinary
        },
        {
          name: 'addevents',
          path: 'addevents',
          component: AddEvents
        },
        {
          name: 'addcrafts',
          path: 'addcrafts',
          component: AddCraft
        },
        {
          name: 'addculinary',
          path: 'addculinary',
          component: AddCulinary
        },
        {
          name: 'editevents',
          path: 'editevents/:id',
          component: EditEvents
        },
        {
          name: 'editcraft',
          path: 'editcraft/:id',
          component: EditCraft
        },
        {
          name: 'editculinary',
          path: 'editculinary/:id',
          component: EditCulinary
        },
        {
          name: 'eventsdetails',
          path: 'eventsdetails/:id',
          component: EventsDetails
        },
        {
          name: 'craftdetails',
          path: 'craftdetails/:id',
          component: EventsDetails
        },
        {
          name: 'culinarydetails',
          path: 'culinarydetails/:id',
          component: CulinaryDetails
        }
      ]
    }
  ]
})
