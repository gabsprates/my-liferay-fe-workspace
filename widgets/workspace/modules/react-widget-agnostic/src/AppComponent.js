import React, { useId } from "react";

export default function AppComponent(props) {
  const id = useId();

  return (
    <div>
      <h1>Hello World, {id}!</h1>

      <h2>
        {Liferay.Language.get("portlet-element-id")}: {props.portletElementId}
      </h2>

      <table>
        <tbody>
          <tr>
            <td className="tag">
              {Liferay.Language.get("portlet-namespace")}:
            </td>
            <td className="value">{props.portletNamespace}</td>
          </tr>

          <tr>
            <td className="tag">{Liferay.Language.get("context-path")}:</td>
            <td className="value">{props.contextPath}</td>
          </tr>

          <tr>
            <td className="tag">
              {Liferay.Language.get("portlet-element-id")}:
            </td>
            <td className="value">{props.portletElementId}</td>
          </tr>

          <tr>
            <td className="tag">{Liferay.Language.get("configuration")}:</td>
            <td className="value pre">
              {JSON.stringify(props.configuration, null, 2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
