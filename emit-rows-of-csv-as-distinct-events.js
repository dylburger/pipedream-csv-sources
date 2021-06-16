const parse = require('csv-parse/lib/sync')

module.exports = {
  key: "csv-emit-rows-as-events",
  name: "CSV — Emit rows as events",
  description: "Receives a CSV in the body of an HTTP request. Parses it and emits each row as its own event",
  version: "0.0.1",
  props: {
    http: {
      type: "$.interface.http",
    },
  },
  async run(event) {
    // Assumes the CSV will be sent in the body of the HTTP request.
    // Modify as necessary
    const { body } = event;
    const records = parse(body, {
      columns: true,
      skip_empty_lines: true
    })
    for (const record of records) {
      this.$emit(record, { summary: JSON.stringify(record) });
    }
  }
};