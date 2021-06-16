## Pipedream CSV event sources

These event sources process CSV files.

## Usage

[Sign up for Pipedream](https://pipedream.com) and [install](https://pipedream.com/docs/cli/install/) and [configure the Pipedream CLI](https://pipedream.com/docs/cli/login/)

Deploy the event source to your account by running:

```bash
pd deploy emit-rows-of-csv-as-distinct-events.js
```

This will deploy the source to your account and generate an associated HTTP endpoint where you can send the CSV. You can test the event source works by sending the `test.csv` file in this repo:

```bash
curl --data-binary @test.csv -H "Content-Type: text/csv" https://endpoint.m.pipedream.net
```

You should see the event source emit two events: one corresponding to each row (minus the header row).