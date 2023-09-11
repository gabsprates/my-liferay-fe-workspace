/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main(params) {
  const node = document.getElementById(params.portletElementId);

  node.innerHTML = `
    <div>
        <h1>Hello world!</h1>

        <pre>${JSON.stringify(params, null, 2)}</pre>
    </div>`;
}
