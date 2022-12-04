set-project:
	gcloud config set project ar-auth-dev

docker-build-dev:
	docker build --build-arg BUILD_TYPE=":dev" -t eu.gcr.io/ar-auth-dev/cinn-graph-dev .

docker-push-dev:
	docker push eu.gcr.io/ar-auth-dev/cinn-graph-dev

set-prod-project:
	gcloud config set project cinnaview-prod

docker-build-prod:
	docker build --build-arg BUILD_TYPE="" -t us.gcr.io/cinnaview-prod/cinn-graph-prod .

docker-push-prod:
	docker push us.gcr.io/cinnaview-prod/cinn-graph-prod
	