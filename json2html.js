// json2html.js

export default function json2html(data) {
  // Extract column headers dynamically from the keys of the objects
  const columns = [...new Set(data.flatMap(Object.keys))];

  // Generate HTML table
  const tableHTML = `
      <table data-user="pranavrajb03@gmail.com">
        <thead>
          <tr>${columns.map((col) => `<th>${col}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${data
            .map(
              (row) => `
            <tr>
              ${columns.map((col) => `<td>${row[col] ?? ""}</td>`).join("")}
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;

  return tableHTML;
}
