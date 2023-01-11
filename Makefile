set-dev-project:
	gcloud config set project travellr-dev

docker-build-dev:
	docker build --build-arg BUILD_TYPE=":dev" -t eu.gcr.io/travellr-dev/trottar-graph-dev .

docker-push-dev:
	docker push eu.gcr.io/travellr-dev/trottar-graph-dev

set-prod-project:
	gcloud config set project travellr-prod

docker-build-prod:
	docker build --build-arg BUILD_TYPE="" -t eu.gcr.io/travellr-dev/trottar-graph-prod .

docker-push-prod:
	docker push eu.gcr.io/travellr-dev/trottar-graph-prod
	