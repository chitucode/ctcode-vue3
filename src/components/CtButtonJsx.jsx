import { defineComponent } from 'vue'
// 导入样式
import styles from "./styles/ctButton.module.less"

const CtButtonJsx = defineComponent({
    setup() {
        function handleClick(){
            alert("JSX button");
        }

        return {
            handleClick
        }
    },
    render() {
        const { handleClick } = this;
        // 添加样式 class={styles.primary}
        return <button class={styles.primary} onClick={ handleClick.bind(this) }>
            {/* 插槽的jsx模板写法 */}
            { this.$slots.default() }
        </button>
    }
})

export default CtButtonJsx;