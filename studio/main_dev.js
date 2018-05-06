// eslint-disable-next-line import/no-unresolved, import/extensions
import Studio from 'jsreport-studio';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'brace/mode/jade';

Studio.templateEditorModeResolvers.push(template => (template.engine === 'pug' ? 'jade' : null));
