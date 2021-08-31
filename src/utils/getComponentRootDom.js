import Vue from "vue"

function getComponentRootDom(comp, props) {  //参数一：组件，参数二：组件的配置属性
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}

export default getComponentRootDom;