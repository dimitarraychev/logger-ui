export const logsExample = {
  count: 32,
  logs: [
    {
      _id: "69aec902ef4ea4cd456dc81a",
      timestamp: "2026-03-09T13:20:02.383Z",
      level: "info",
      message: "✅ Report info saved to database.",
      metadata: {
        timestamp: "2026-03-09 15:20:02",
      },
    },
    {
      _id: "69aec902ef4ea4cd456dc819",
      timestamp: "2026-03-09T13:20:02.361Z",
      level: "info",
      message: "Report request towards RGS",
      metadata: {
        method: "POST",
        path: "https://rgs1admin.ctrgs.com:9036/dbr-api/priority_billing",
        body: "payload_jsonrpc=%7B%22jsonrpc%22%3A%222.0%22%2C%22id%22%3Anull%2C%22method%22%3A%22run_report%22%2C%22params%22%3A%7B%22rid%22%3A%2259100aa4-2bbe-49b1-a876-afcce03568d1%22%2C%22report_id%22%3A%22audit_rgs%22%2C%22subreport_id%22%3A%227.3.+Error+Log%22%2C%22send_redirect_headers%22%3Afalse%2C%22result_rows_limit%22%3A%2210000%22%2C%22export_format%22%3A%22api_csv%22%2C%22filters__Period__start_value%22%3A%222026-03-09T13%3A15%3A00.015Z%22%2C%22filters__Period__end_value%22%3A%222026-03-09T13%3A20%3A00.016Z%22%2C%22group_by__Period__mode%22%3A%22group_by_value%22%2C%22group_by__Gameplay+ID__mode%22%3A%22group_by_value%22%2C%22report_columns%22%3A%5B%22Audit+ID%22%2C%22Period%22%2C%22Operator+Endpoint%22%2C%22Code%22%2C%22Audit+Type%22%2C%22Description%22%5D%2C%22addit_filters__7.3.+Error+Log__Operator+Endpoint__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Code__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Audit+Type__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Description__groupby%22%3A%22value%22%7D%7D",
        status: 200,
        timestamp: "2026-03-09 15:20:02",
      },
    },
    {
      _id: "69aec900ef4ea4cd456dc818",
      timestamp: "2026-03-09T13:20:00.021Z",
      level: "info",
      message:
        "⏱ Starting 5-min report job from 2026-03-09 15:15:00 to 2026-03-09 15:20:00...",
      metadata: {
        timestamp: "2026-03-09 15:20:00",
      },
    },
    {
      _id: "69aec900ef4ea4cd456dc817",
      timestamp: "2026-03-09T13:20:00.017Z",
      level: "warn",
      message:
        "⚠️ Last report fetch was 125 minutes ago. Skipping large gap and starting from current time.",
      metadata: {
        timestamp: "2026-03-09 15:20:00",
      },
    },
    {
      _id: "69aec7d7ef4ea4cd456dc816",
      timestamp: "2026-03-09T13:15:03.333Z",
      level: "info",
      message: "✅ Report info saved to database.",
      metadata: {
        timestamp: "2026-03-09 15:15:03",
      },
    },
    {
      _id: "69aec7d7ef4ea4cd456dc815",
      timestamp: "2026-03-09T13:15:03.133Z",
      level: "info",
      message: "Report request towards RGS",
      metadata: {
        method: "POST",
        path: "https://rgs1admin.ctrgs.com:9036/dbr-api/priority_billing",
        body: "payload_jsonrpc=%7B%22jsonrpc%22%3A%222.0%22%2C%22id%22%3Anull%2C%22method%22%3A%22run_report%22%2C%22params%22%3A%7B%22rid%22%3A%2259100aa4-2bbe-49b1-a876-afcce03568d1%22%2C%22report_id%22%3A%22audit_rgs%22%2C%22subreport_id%22%3A%227.3.+Error+Log%22%2C%22send_redirect_headers%22%3Afalse%2C%22result_rows_limit%22%3A%2210000%22%2C%22export_format%22%3A%22api_csv%22%2C%22filters__Period__start_value%22%3A%222026-03-09T13%3A10%3A00.009Z%22%2C%22filters__Period__end_value%22%3A%222026-03-09T13%3A15%3A00.010Z%22%2C%22group_by__Period__mode%22%3A%22group_by_value%22%2C%22group_by__Gameplay+ID__mode%22%3A%22group_by_value%22%2C%22report_columns%22%3A%5B%22Audit+ID%22%2C%22Period%22%2C%22Operator+Endpoint%22%2C%22Code%22%2C%22Audit+Type%22%2C%22Description%22%5D%2C%22addit_filters__7.3.+Error+Log__Operator+Endpoint__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Code__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Audit+Type__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Description__groupby%22%3A%22value%22%7D%7D",
        status: 200,
        timestamp: "2026-03-09 15:15:03",
      },
    },
    {
      _id: "69aec7d4ef4ea4cd456dc814",
      timestamp: "2026-03-09T13:15:00.015Z",
      level: "info",
      message:
        "⏱ Starting 5-min report job from 2026-03-09 15:10:00 to 2026-03-09 15:15:00...",
      metadata: {
        timestamp: "2026-03-09 15:15:00",
      },
    },
    {
      _id: "69aec7d4ef4ea4cd456dc813",
      timestamp: "2026-03-09T13:15:00.012Z",
      level: "warn",
      message:
        "⚠️ Last report fetch was 125 minutes ago. Skipping large gap and starting from current time.",
      metadata: {
        timestamp: "2026-03-09 15:15:00",
      },
    },
    {
      _id: "69aec6aaef4ea4cd456dc812",
      timestamp: "2026-03-09T13:10:02.921Z",
      level: "info",
      message: "✅ Report info saved to database.",
      metadata: {
        timestamp: "2026-03-09 15:10:02",
      },
    },
    {
      _id: "69aec6aaef4ea4cd456dc811",
      timestamp: "2026-03-09T13:10:02.887Z",
      level: "info",
      message: "Report request towards RGS",
      metadata: {
        method: "POST",
        path: "https://rgs1admin.ctrgs.com:9036/dbr-api/priority_billing",
        body: "payload_jsonrpc=%7B%22jsonrpc%22%3A%222.0%22%2C%22id%22%3Anull%2C%22method%22%3A%22run_report%22%2C%22params%22%3A%7B%22rid%22%3A%2259100aa4-2bbe-49b1-a876-afcce03568d1%22%2C%22report_id%22%3A%22audit_rgs%22%2C%22subreport_id%22%3A%227.3.+Error+Log%22%2C%22send_redirect_headers%22%3Afalse%2C%22result_rows_limit%22%3A%2210000%22%2C%22export_format%22%3A%22api_csv%22%2C%22filters__Period__start_value%22%3A%222026-03-09T13%3A05%3A00.010Z%22%2C%22filters__Period__end_value%22%3A%222026-03-09T13%3A10%3A00.010Z%22%2C%22group_by__Period__mode%22%3A%22group_by_value%22%2C%22group_by__Gameplay+ID__mode%22%3A%22group_by_value%22%2C%22report_columns%22%3A%5B%22Audit+ID%22%2C%22Period%22%2C%22Operator+Endpoint%22%2C%22Code%22%2C%22Audit+Type%22%2C%22Description%22%5D%2C%22addit_filters__7.3.+Error+Log__Operator+Endpoint__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Code__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Audit+Type__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Description__groupby%22%3A%22value%22%7D%7D",
        status: 200,
        timestamp: "2026-03-09 15:10:02",
      },
    },
    {
      _id: "69aec6a8ef4ea4cd456dc810",
      timestamp: "2026-03-09T13:10:00.018Z",
      level: "info",
      message:
        "⏱ Starting 5-min report job from 2026-03-09 15:05:00 to 2026-03-09 15:10:00...",
      metadata: {
        timestamp: "2026-03-09 15:10:00",
      },
    },
    {
      _id: "69aec6a8ef4ea4cd456dc80f",
      timestamp: "2026-03-09T13:10:00.014Z",
      level: "warn",
      message:
        "⚠️ Last report fetch was 125 minutes ago. Skipping large gap and starting from current time.",
      metadata: {
        timestamp: "2026-03-09 15:10:00",
      },
    },
    {
      _id: "69aec57eef4ea4cd456dc80e",
      timestamp: "2026-03-09T13:05:02.455Z",
      level: "info",
      message: "✅ Report info saved to database.",
      metadata: {
        timestamp: "2026-03-09 15:05:02",
      },
    },
    {
      _id: "69aec57eef4ea4cd456dc80d",
      timestamp: "2026-03-09T13:05:02.385Z",
      level: "info",
      message: "Report request towards RGS",
      metadata: {
        method: "POST",
        path: "https://rgs1admin.ctrgs.com:9036/dbr-api/priority_billing",
        body: "payload_jsonrpc=%7B%22jsonrpc%22%3A%222.0%22%2C%22id%22%3Anull%2C%22method%22%3A%22run_report%22%2C%22params%22%3A%7B%22rid%22%3A%2259100aa4-2bbe-49b1-a876-afcce03568d1%22%2C%22report_id%22%3A%22audit_rgs%22%2C%22subreport_id%22%3A%227.3.+Error+Log%22%2C%22send_redirect_headers%22%3Afalse%2C%22result_rows_limit%22%3A%2210000%22%2C%22export_format%22%3A%22api_csv%22%2C%22filters__Period__start_value%22%3A%222026-03-09T13%3A00%3A00.012Z%22%2C%22filters__Period__end_value%22%3A%222026-03-09T13%3A05%3A00.012Z%22%2C%22group_by__Period__mode%22%3A%22group_by_value%22%2C%22group_by__Gameplay+ID__mode%22%3A%22group_by_value%22%2C%22report_columns%22%3A%5B%22Audit+ID%22%2C%22Period%22%2C%22Operator+Endpoint%22%2C%22Code%22%2C%22Audit+Type%22%2C%22Description%22%5D%2C%22addit_filters__7.3.+Error+Log__Operator+Endpoint__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Code__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Audit+Type__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Description__groupby%22%3A%22value%22%7D%7D",
        status: 200,
        timestamp: "2026-03-09 15:05:02",
      },
    },
    {
      _id: "69aec57cef4ea4cd456dc80c",
      timestamp: "2026-03-09T13:05:00.017Z",
      level: "info",
      message:
        "⏱ Starting 5-min report job from 2026-03-09 15:00:00 to 2026-03-09 15:05:00...",
      metadata: {
        timestamp: "2026-03-09 15:05:00",
      },
    },
    {
      _id: "69aec57cef4ea4cd456dc80b",
      timestamp: "2026-03-09T13:05:00.014Z",
      level: "warn",
      message:
        "⚠️ Last report fetch was 125 minutes ago. Skipping large gap and starting from current time.",
      metadata: {
        timestamp: "2026-03-09 15:05:00",
      },
    },
    {
      _id: "69aec53eef4ea4cd456dc80a",
      timestamp: "2026-03-09T13:03:58.328Z",
      level: "info",
      message: "Ping",
      metadata: {
        method: "GET",
        path: "/base/",
        body: null,
        status: 404,
        durationMs: 6,
        responseBody: null,
        timestamp: "2026-03-09 15:03:58",
      },
    },
    {
      _id: "69aec453ef4ea4cd456dc809",
      timestamp: "2026-03-09T13:00:03.457Z",
      level: "info",
      message: "✅ Report info saved to database.",
      metadata: {
        timestamp: "2026-03-09 15:00:03",
      },
    },
    {
      _id: "69aec453ef4ea4cd456dc808",
      timestamp: "2026-03-09T13:00:03.423Z",
      level: "info",
      message: "Report request towards RGS",
      metadata: {
        method: "POST",
        path: "https://rgs1admin.ctrgs.com:9036/dbr-api/priority_billing",
        body: "payload_jsonrpc=%7B%22jsonrpc%22%3A%222.0%22%2C%22id%22%3Anull%2C%22method%22%3A%22run_report%22%2C%22params%22%3A%7B%22rid%22%3A%2259100aa4-2bbe-49b1-a876-afcce03568d1%22%2C%22report_id%22%3A%22audit_rgs%22%2C%22subreport_id%22%3A%227.3.+Error+Log%22%2C%22send_redirect_headers%22%3Afalse%2C%22result_rows_limit%22%3A%2210000%22%2C%22export_format%22%3A%22api_csv%22%2C%22filters__Period__start_value%22%3A%222026-03-09T12%3A55%3A00.009Z%22%2C%22filters__Period__end_value%22%3A%222026-03-09T13%3A00%3A00.010Z%22%2C%22group_by__Period__mode%22%3A%22group_by_value%22%2C%22group_by__Gameplay+ID__mode%22%3A%22group_by_value%22%2C%22report_columns%22%3A%5B%22Audit+ID%22%2C%22Period%22%2C%22Operator+Endpoint%22%2C%22Code%22%2C%22Audit+Type%22%2C%22Description%22%5D%2C%22addit_filters__7.3.+Error+Log__Operator+Endpoint__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Code__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Audit+Type__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Description__groupby%22%3A%22value%22%7D%7D",
        status: 200,
        timestamp: "2026-03-09 15:00:03",
      },
    },
    {
      _id: "69aec450ef4ea4cd456dc807",
      timestamp: "2026-03-09T13:00:00.015Z",
      level: "info",
      message:
        "⏱ Starting 5-min report job from 2026-03-09 14:55:00 to 2026-03-09 15:00:00...",
      metadata: {
        timestamp: "2026-03-09 15:00:00",
      },
    },
    {
      _id: "69aec450ef4ea4cd456dc806",
      timestamp: "2026-03-09T13:00:00.012Z",
      level: "warn",
      message:
        "⚠️ Last report fetch was 125 minutes ago. Skipping large gap and starting from current time.",
      metadata: {
        timestamp: "2026-03-09 15:00:00",
      },
    },
    {
      _id: "69aec326ef4ea4cd456dc805",
      timestamp: "2026-03-09T12:55:02.979Z",
      level: "info",
      message: "✅ Report info saved to database.",
      metadata: {
        timestamp: "2026-03-09 14:55:02",
      },
    },
    {
      _id: "69aec326ef4ea4cd456dc804",
      timestamp: "2026-03-09T12:55:02.952Z",
      level: "info",
      message: "Report request towards RGS",
      metadata: {
        method: "POST",
        path: "https://rgs1admin.ctrgs.com:9036/dbr-api/priority_billing",
        body: "payload_jsonrpc=%7B%22jsonrpc%22%3A%222.0%22%2C%22id%22%3Anull%2C%22method%22%3A%22run_report%22%2C%22params%22%3A%7B%22rid%22%3A%2259100aa4-2bbe-49b1-a876-afcce03568d1%22%2C%22report_id%22%3A%22audit_rgs%22%2C%22subreport_id%22%3A%227.3.+Error+Log%22%2C%22send_redirect_headers%22%3Afalse%2C%22result_rows_limit%22%3A%2210000%22%2C%22export_format%22%3A%22api_csv%22%2C%22filters__Period__start_value%22%3A%222026-03-09T12%3A50%3A00.010Z%22%2C%22filters__Period__end_value%22%3A%222026-03-09T12%3A55%3A00.011Z%22%2C%22group_by__Period__mode%22%3A%22group_by_value%22%2C%22group_by__Gameplay+ID__mode%22%3A%22group_by_value%22%2C%22report_columns%22%3A%5B%22Audit+ID%22%2C%22Period%22%2C%22Operator+Endpoint%22%2C%22Code%22%2C%22Audit+Type%22%2C%22Description%22%5D%2C%22addit_filters__7.3.+Error+Log__Operator+Endpoint__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Code__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Audit+Type__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Description__groupby%22%3A%22value%22%7D%7D",
        status: 200,
        timestamp: "2026-03-09 14:55:02",
      },
    },
    {
      _id: "69aec324ef4ea4cd456dc803",
      timestamp: "2026-03-09T12:55:00.017Z",
      level: "info",
      message:
        "⏱ Starting 5-min report job from 2026-03-09 14:50:00 to 2026-03-09 14:55:00...",
      metadata: {
        timestamp: "2026-03-09 14:55:00",
      },
    },
    {
      _id: "69aec324ef4ea4cd456dc802",
      timestamp: "2026-03-09T12:55:00.013Z",
      level: "warn",
      message:
        "⚠️ Last report fetch was 125 minutes ago. Skipping large gap and starting from current time.",
      metadata: {
        timestamp: "2026-03-09 14:55:00",
      },
    },
    {
      _id: "69aec1faef4ea4cd456dc801",
      timestamp: "2026-03-09T12:50:02.531Z",
      level: "info",
      message: "✅ Report info saved to database.",
      metadata: {
        timestamp: "2026-03-09 14:50:02",
      },
    },
    {
      _id: "69aec1faef4ea4cd456dc800",
      timestamp: "2026-03-09T12:50:02.496Z",
      level: "info",
      message: "Report request towards RGS",
      metadata: {
        method: "POST",
        path: "https://rgs1admin.ctrgs.com:9036/dbr-api/priority_billing",
        body: "payload_jsonrpc=%7B%22jsonrpc%22%3A%222.0%22%2C%22id%22%3Anull%2C%22method%22%3A%22run_report%22%2C%22params%22%3A%7B%22rid%22%3A%2259100aa4-2bbe-49b1-a876-afcce03568d1%22%2C%22report_id%22%3A%22audit_rgs%22%2C%22subreport_id%22%3A%227.3.+Error+Log%22%2C%22send_redirect_headers%22%3Afalse%2C%22result_rows_limit%22%3A%2210000%22%2C%22export_format%22%3A%22api_csv%22%2C%22filters__Period__start_value%22%3A%222026-03-09T12%3A45%3A00.014Z%22%2C%22filters__Period__end_value%22%3A%222026-03-09T12%3A50%3A00.015Z%22%2C%22group_by__Period__mode%22%3A%22group_by_value%22%2C%22group_by__Gameplay+ID__mode%22%3A%22group_by_value%22%2C%22report_columns%22%3A%5B%22Audit+ID%22%2C%22Period%22%2C%22Operator+Endpoint%22%2C%22Code%22%2C%22Audit+Type%22%2C%22Description%22%5D%2C%22addit_filters__7.3.+Error+Log__Operator+Endpoint__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Code__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Audit+Type__groupby%22%3A%22value%22%2C%22addit_filters__7.3.+Error+Log__Description__groupby%22%3A%22value%22%7D%7D",
        status: 200,
        timestamp: "2026-03-09 14:50:02",
      },
    },
    {
      _id: "69aec1f8ef4ea4cd456dc7ff",
      timestamp: "2026-03-09T12:50:00.077Z",
      level: "info",
      message:
        "⏱ Starting 5-min report job from 2026-03-09 14:45:00 to 2026-03-09 14:50:00...",
      metadata: {
        timestamp: "2026-03-09 14:50:00",
      },
    },
    {
      _id: "69aec1f8ef4ea4cd456dc7fe",
      timestamp: "2026-03-09T12:50:00.052Z",
      level: "warn",
      message:
        "⚠️ Last report fetch was 125 minutes ago. Skipping large gap and starting from current time.",
      metadata: {
        timestamp: "2026-03-09 14:50:00",
      },
    },
    {
      _id: "69aec123ef4ea4cd456dc7fd",
      timestamp: "2026-03-09T12:46:27.467Z",
      level: "info",
      message: "🟢 CSV cron report job started.",
      metadata: {
        timestamp: "2026-03-09 14:46:27",
      },
    },
    {
      _id: "69aec123ef4ea4cd456dc7fc",
      timestamp: "2026-03-09T12:46:27.423Z",
      level: "info",
      message: "✅ MongoDB connected",
      metadata: {
        port: 27017,
        timestamp: "2026-03-09 14:46:27",
      },
    },
    {
      _id: "69aec123ef4ea4cd456dc7fb",
      timestamp: "2026-03-09T12:46:27.415Z",
      level: "info",
      message: "Server started...",
      metadata: {
        port: 4000,
        timestamp: "2026-03-09 14:46:27",
      },
    },
  ],
};
