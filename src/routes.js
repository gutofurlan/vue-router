import HomeComponent from './components/HomeComponent'
import ProductsComponent from './components/ProductsComponent'
import TasksComponent from './components/TasksComponent'
import Error404Component from './components/Error404Component'

export default [
    {path: '/', component: HomeComponent},
    {path: '/produtos', component: ProductsComponent, name: 'products'},
    {path: '/tarefa/:id/ver', component: TasksComponent, name: 'viewTask', props: true}, //autoriza props, rota default
    {path: '/redirect', redirect: '/produtos'}, //redireciona
    {path: '*', component: Error404Component} //rota 404

]