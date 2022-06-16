let _token

// window.editorSDK.panel.onEvent(async ({ eventType, eventPayload }) => {
//     if (eventType === 'startConfiguration') {
//         const { token } = eventPayload;
//         _token = token
//     }
// });

window.loadGAEditorSDK()

const openPanel = async () => {
    const {editorSDK} = window
    const selectedComponents = await editorSDK.editor.selection.getSelectedComponents();

    await editorSDK.editor.openComponentPanel(_token, {
        url: './spacing.html',
        title: 'Spacing',
        initialData: {some: 'data'},
        componentRef: selectedComponents[0],
        type: editorSDK.editor.PanelType.Settings
        // OR
        // type: 'settings'
    });
}

document.getElementById('open-button').addEventListener('click', () => {
    openPanel()
})
