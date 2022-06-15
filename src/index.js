export const editorReady = async (
    editorSDK,
    token,
    { firstInstall },
) => {
    console.log('spacing-editorReady', editorSDK)

    editorSDK.editor.openSidePanel('TOKEN', {
        url: `./index.html`,
        width: 233,
        showOverlay: false,
        displayAboveModals: true,
    });
};
