const extensionStoreUrl = "https://chrome.google.com/webstore/detail/digitalpersona-altus/piimgpjgnagkckjlhjcppbkbjjfjmnbh";

const buttonClasses = "px-4 py-3 text-primary-900 bg-primary-300 border-primary-400 hover:bg-primary-200 border rounded shadow hover:shadow-lg active:scale-[.97]";

export function InstallButton() {
    return (
        <a className={buttonClasses} href={extensionStoreUrl} target="_blank" >
            Install Extension
        </a>
    );
}

// TODO: Go to the installation page in the Google Store.
// TODO: Install the extension from the Google Store.
// TODO: Open the Google Store installation page.
// TODO: Open the Google Store extension installation page.
