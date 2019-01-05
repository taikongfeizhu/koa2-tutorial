// pm2 start ecosystem.config.js # uses variables from `env`
// pm2 start ecosystem.config.js --env production # uses variables from `env_production`

module.exports = {
  apps: [{
    name: "koa2",
    script: "app.js",
    log_date_format: "YYYY-MM-DD HH:mm Z",
    error_file: "/home/huangjian/docker/logs/node-app.stderr.log",
    out_file: "/home/huangjian/docker/logs/out/node-app.stdout.log",
    pid_file: "/home/huangjian/docker/logs/pids/node-geo-api.pid",
    instances: 6,
    min_uptime: "200s",
    max_restarts: 10,
    max_memory_restart: "1M",
    cron_restart: "1 0 * * *",
    watch: false,
    merge_logs: true,
    exec_interpreter: "node",
    exec_mode: "fork",
    autorestart: false,
    vizion: false,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
};