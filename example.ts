import { SkyNoteEditor } from '@skynote/editor';
import { LeaferAdapter } from '@skynote/renderer-leafer';

const canvas = document.querySelector<HTMLElement>('#canvas');
if (!canvas) throw new Error('Canvas container is missing');

const editor = new SkyNoteEditor<HTMLElement>({ renderer: new LeaferAdapter() });
editor.mount(canvas);
editor.insertNodeAtViewportCenter({ nodeType: 'sticky', options: { text: 'Hello, SkyNote!' } });
window.addEventListener('pagehide', (event) => {
  if (!event.persisted) editor.destroy();
});
