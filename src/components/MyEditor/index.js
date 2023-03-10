import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
// import { DomEditor } from '@wangeditor/editor'

function MyEditor(props) {

    // editor 实例
    const [editor, setEditor] = useState(null)
    // const toolbar = DomEditor.getToolbar(editor)

    // 编辑器内容
    const [html, setHtml] = useState()

    // 工具栏配置
    const toolbarConfig = {
        excludeKeys: [
            "undo",
            "redo",
            "fullScreen",
            'group-video'
        ]
    }

    // 编辑器配置
    const editorConfig = {
        placeholder: '请输入内容...',
    }

    // 挂载
    useEffect(() => {
        setTimeout(() => {
            setHtml(props.content);
        }, 100);
    }, [])

    // 更新
    useEffect(() => {
        props.getContent(html)
    }, [html])

    // 及时销毁 editor ，重要！
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    return (
        <div>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '500px', overflowY: 'hidden' }}
                />
            </div>
            <div style={{ marginTop: '15px' }}>
                {html}
            </div>
        </div>
    )
}

export default MyEditor
