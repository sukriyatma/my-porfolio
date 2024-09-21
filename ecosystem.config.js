module.exports = {
  apps: [
      {
          name: 'my-portfolio', // The name of your PM2 application
          script: 'node_modules/next/dist/bin/next',
          args: 'start',
          cwd: './',

          // General Options
          instances: 1, // Run the app in cluster mode, max will auto-scale based on the number of CPU cores
          exec_mode: 'cluster', // Enables cluster mode to take advantage of multi-core systems
          watch: false, // Disable watch in production for performance reasons
          max_memory_restart: '1G', // Restart the app if it exceeds 1GB memory usage
          autorestart: true, // Automatically restart the app if it crashes
          shutdown_with_message: true, // Ensure smooth shutdown with NestJS
  
          // Log configuration
          output: './logs/app.log', // Path to standard output logs
          error: './logs/err.log', // Path to error logs
          log_date_format: 'YYYY-MM-DD HH:mm Z', // Format for log timestamps
  
          // Environment Variables
          env: {
              NODE_ENV: 'development',
              PORT: 3000, // Default port for development
          },
          env_production: {
              NODE_ENV: 'production',
              PORT: 8080, // Port for production environment
          },
  
          // Advanced Options
          exp_backoff_restart_delay: 100, // Time (ms) to wait before restarting a crashed instance (for exponential backoff)
          max_restarts: 10, // Number of allowed restarts within a timeframe before stopping the process
          kill_timeout: 5000, // Time (ms) to wait before forcefully killing the app during shutdown
      },
  ],
};