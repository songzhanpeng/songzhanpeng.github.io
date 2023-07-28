// 从 "vitepress/theme" 导入默认主题
import DefaultTheme from "vitepress/theme";

// 导入自定义组件
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
// import StarRail from "./components/StarRail.vue";
import MyLayout from "./components/MyLayout.vue";

// 导入自定义 CSS 样式
import "./custom.css";

// 导出修改后的主题对象
export default {
  // 使用扩展运算符继承 DefaultTheme 对象的属性
  ...DefaultTheme,
  
  // 使用自定义布局替换默认布局
  Layout: MyLayout,
  
  // 增强应用程序，注册全局组件
  enhanceApp(ctx) {
    // 调用 DefaultTheme 的 enhanceApp 函数
    DefaultTheme.enhanceApp(ctx);

    // 从上下文中获取应用程序实例
    const { app } = ctx;

    // 注册自定义全局组件
    app.component("Archives", Archives);
    app.component("Tags", Tags);
    // app.component("StarRail", StarRail);
  },
};
