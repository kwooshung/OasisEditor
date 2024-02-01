import { schema } from 'prosemirror-schema-basic';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';

const createEditor = (elem?: HTMLElement) => {
  elem = elem ?? document.body;

  const state = EditorState.create({ schema });
  const view = new EditorView(elem, {
    state,
    dispatchTransaction(transaction) {
      console.log('Document size went from', transaction.before.content.size, 'to', transaction.doc.content.size);
      const newState = view.state.apply(transaction);
      view.updateState(newState);
    }
  });

  view.dom.classList.add('OasisEditor');
};

export default createEditor;
