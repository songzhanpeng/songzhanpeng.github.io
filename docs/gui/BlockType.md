#  BlockType 类型

```js
const BlockType = {
    /**
     * Boolean reporter with hexagonal shape
     */
    BOOLEAN: 'Boolean', // 条件积木 尖括号的那种 函数返回值必须是boolean

    /**
     * A button (not an actual block) for some special action, like making a variable
     */
    BUTTON: 'button', // 按钮形状的积木 暂时用不到

    /**
     * Command block
     */
    COMMAND: 'command', // 标准积木 没有返回值 只有执行的函数

    /**
     * Specialized command block which may or may not run a child branch
     * The thread continues with the next block whether or not a child branch ran.
     */
    CONDITIONAL: 'conditional', // 条件积木 暂时用不到

    /**
     * Specialized hat block with no implementation function
     * This stack only runs if the corresponding event is emitted by other code.
     */
    EVENT: 'event', // 事件积木 暂时用不到

    /**
     * Hat block which conditionally starts a block stack
     */
    HAT: 'hat', // 监听积木

    /**
     * Specialized command block which may or may not run a child branch
     * If a child branch runs, the thread evaluates the loop block again.
     */
    LOOP: 'loop', // 暂时用不到

    /**
     * General reporter with numeric or string value
     * 变量
     */
    REPORTER: 'reporter' // 变量积木 返回 对应的值
};
```


#  BlockType 类型2

```js
const BlockType = {
    /**
     * Boolean reporter with hexagonal shape
     */
    BOOLEAN: 'Boolean', // 条件积木 尖括号的那种 函数返回值必须是boolean

    /**
     * A button (not an actual block) for some special action, like making a variable
     */
    BUTTON: 'button', // 按钮形状的积木 暂时用不到

    /**
     * Command block
     */
    COMMAND: 'command', // 标准积木 没有返回值 只有执行的函数

    /**
     * Specialized command block which may or may not run a child branch
     * The thread continues with the next block whether or not a child branch ran.
     */
    CONDITIONAL: 'conditional', // 条件积木 暂时用不到

    /**
     * Specialized hat block with no implementation function
     * This stack only runs if the corresponding event is emitted by other code.
     */
    EVENT: 'event', // 事件积木 暂时用不到

    /**
     * Hat block which conditionally starts a block stack
     */
    HAT: 'hat', // 监听积木

    /**
     * Specialized command block which may or may not run a child branch
     * If a child branch runs, the thread evaluates the loop block again.
     */
    LOOP: 'loop', // 暂时用不到

    /**
     * General reporter with numeric or string value
     * 变量
     */
    REPORTER: 'reporter' // 变量积木 返回 对应的值
};
```