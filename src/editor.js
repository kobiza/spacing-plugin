let _editorSDK
let _token

export const editorReady = async (
    editorSDK,
    token,
) => {
    _editorSDK = editorSDK
    _token = token

    console.log('spacing-editorReady', editorSDK)

    editorSDK.editor.openSidePanel(token, {
        url: `./managerPanel.html`,
        width: 233,
        showOverlay: false,
        displayAboveModals: true,
        initialData: {
            token
        }
    });
};

export const getEditorData = () => {
    return {
        editorSDK: _editorSDK,
        token: _token,
    }
}
