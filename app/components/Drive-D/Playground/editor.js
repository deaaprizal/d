import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/moxer.css'
import 'codemirror/theme/twilight.css'
import 'codemirror/theme/abbott.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/edit/closetag'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {

  const {
    language,
    value,
    theme,
    onChange
  } = props

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: theme,
          lineNumbers: true,
          autoCloseTags: true
        }}
      />
    </div>
  )
}