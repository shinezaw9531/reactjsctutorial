 
APP_VERSION=$(./scripts/get-version.sh);
echo "{\"version\":\"$APP_VERSION\"}" > ./public/signature.json