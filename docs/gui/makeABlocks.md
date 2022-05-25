# 建立积木
  1. 积木

  ```js
  const extensionsConfig = {
      blocks: [
        // 普通积木
        {
            opcode: 'public', // 类似 id 保持唯一
            blockType: 'command', // 普通功能积木
            text: '打开车门', // 描述文案
            callbackKey: 'unityOpenDoor', // 回调函数key
            arguments: {} // 参数
        },
        // 下拉积木 一个下拉
        {
            opcode: 'public1', // 类似 id 保持唯一
            blockType: 'command', // 普通功能积木
            text: '打开 [LIST]', // 描述文案
            callbackKey: 'unityOpenList', // 回调函数key
            arguments: {
                LIST: {
                    type: 'number', // type 类型
                    menu: 'TYPE_1', // 对应枚举列表
                    defaultValue: 1 // 默认下标 从 1 开始
                }
            } // 参数
        },
        // 下拉积木 多个下拉
        {
            opcode: 'public1', // 类似 id 保持唯一
            blockType: 'command', // 普通功能积木
            text: '[ACTION] [LIST]', // 描述文案 参数格式 [ACTION] 与 arguments 一一对应
            callbackKey: 'callbackKey', // 回调函数key
            arguments: {
                LIST: {
                    type: 'number', // type 类型
                    menu: 'TYPE_1', // 对应枚举列表
                    defaultValue: 1 // 默认下标 从 1 开始
                },
                ACTION: {
                    type: 'number', // type 类型
                    menu: 'ACTION_1', // 对应枚举列表
                    defaultValue: 1 // 默认下标 从 1 开始
                }
            } // 参数
        },
        // 变量积木 无 callbackKey
        {
            opcode: 'temperature', // 类似 id 保持唯一
            text: '空调温度 (℃)', // 描述文案
            blockType: 'reporter', // 变量 类型
            variableKey: 'temperature', // 变量类型key
            arguments: {} // 无参数
        },
        // 当 。。。 hat 积木
        {
            opcode: 'whenAuto',
            blockType: 'hat',
            text: '当接收到 [BOOLEAN]',
            // callbackKey: 'callbackKey', // 回调函数key 一个 [BOOLEAN] 可以不传 callbackKey
            arguments: {
                BOOLEAN: {
                    type: 'Boolean',
                    defaultValue: false
                }
            }
        },
        // 条件积木
        {
            opcode: 'doorOpen',
            text: '车门打开',
            blockType: 'Blooean',
            callbackKey: ,
            arguments: {}
        },
      ],
      menus: { // 枚举集合
        ACTION_1: {
            acceptReporters: true, // 必须为 true
            items: [ // 下拉列表 text value
                {
                    text: '打开',
                    value: 1
                },
                {
                    text: '关闭',
                    value: 2
                }
            ]
        },
        TYPE_1: {
            acceptReporters: true,
            items: [
                {
                    text: '车门',
                    value: 1
                },
                {
                    text: '天窗',
                    value: 2
                },
                {
                    text: '车灯',
                    value: 3
                }
            ]
        },
    },
    variables: { // 属性
        doorStatus: false, // 车门状态
        doorAngle: 0, // 车门角度
        temperature: 26 // 空调温度
    }
  }



  export default (unityInstance) => { // 回调函数返回一个对象
    return {
        blocks: extensionsConfig.blocks,
        menus: extensionsConfig.menus, // 枚举菜单
        variables: extensionsConfig.variables, // 属性
        // 开门
        unityOpenDoor: ({ runtime }) => {
            // runtime.attachCustomKey 绑定属性方法
            runtime.attachCustomKey('doorStatus', true) // 设置开门状态
            runtime.attachCustomKey('doorAngle', 50) // 设定车门角度
            unityInstance.SendMessage('右车门', 'OnToggle', 50); // 开启unity 车门
        },
        // 打开 ... runtime => 实例对象 | args => 参数对象 | realBlockInfo => 当前积木对象
        unityOpenList: ({ runtime, args, realBlockInfo }) => {
            // ... 省略逻辑 自己组合方法 无return

        },
        // 车门打开 return 布尔值 ture || false
        doorOpen: ({ runtime }) => {
            // runtime.getCustomKey 获取属性方法
            const doorFlag = runtime.getCustomKey('doorFlag')
            return doorFlag
        },
    }
}
  ```