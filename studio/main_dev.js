// eslint-disable-next-line import/no-unresolved, import/extensions, import/no-extraneous-dependencies
import Studio from 'jsreport-studio';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'monaco-editor/esm/vs/basic-languages/pug/pug.contribution';

Studio.templateEditorModeResolvers.push(template => (template.engine === 'pug' ? 'pug' : null));
