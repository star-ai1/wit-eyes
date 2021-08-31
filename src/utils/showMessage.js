
import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 
 * @param {String} content 消息内容 
 * @param {String} type 消息类型 info error success warn
 * @param {Number} duration 多久后消失 
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中；如果不传，则显示到页面的正中。 
 */
export default function (options = {}) {
    const content = options.content || "";
    const type = options.type || "error";
    const duration = options.duration || 2000;
    const container = options.container || document.body;


    //创建消息元素
    const div = document.createElement("div");
    //设置样式
    const typeClassName = styles[`message-${type}`]; //类型样式名
    div.className = (`${styles.message} ${typeClassName}`)

    const iconDom = getComponentRootDom(Icon, {
        type,
    })

    div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`


    

    //判断容器的position是否改动过，
    if (getComputedStyle(container).position === "static") {
        container.style.position = "relative";
    }

    container.appendChild(div);

    //浏览器强行渲染
    div.clientHeight;   /* 导致reflow */
    div.style.transform = "translate(-50%,-50%)";
    div.style.opacity = 1;

    setTimeout(() => {
        div.style.transform = "translate(-50%,-50%) translateY(-25px)";
        div.style.opacity = 0;
        div.addEventListener("transitionend", ()=>{
            div.remove();   
            options.callback && options.callback();
        }, {
            once:true   /* 设置只运行一次 */
        })
    }, duration)
}



