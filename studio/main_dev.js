import Studio from 'jsreport-studio'
import 'brace/mode/jade'

Studio.templateEditorModeResolvers.push((template) => template.engine === 'jade' ? 'jade' : null);
