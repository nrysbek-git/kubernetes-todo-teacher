#!/bin/sh
set -eu
backend_uri="${REACT_APP_BACKEND_BASE_URI:-/api/items}"
cat > /usr/share/nginx/html/env-config.js <<EOF
window._env_ = {
  REACT_APP_BACKEND_BASE_URI: "${backend_uri}"
};
EOF
