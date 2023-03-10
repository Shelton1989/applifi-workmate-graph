set-dev-project:
	gcloud config set project life-health-app-staging

docker-build-dev:
	docker build --build-arg BUILD_TYPE=":dev" -t eu.gcr.io/life-health-app-staging/life-health-graph-dev .

docker-push-dev:
	docker push eu.gcr.io/life-health-app-staging/life-health-graph-dev

deploy-dev:
	gcloud run deploy life-health-graph-dev --image eu.gcr.io/life-health-app-staging/life-health-graph-dev:latest --platform managed --region europe-west1 --allow-unauthenticated

set-prod-project:
	gcloud config set project travellr-prod

docker-build-prod:
	docker build --build-arg BUILD_TYPE="" -t eu.gcr.io/life-health-app-staging/life-health-graph-prod .

docker-push-prod:
	docker push eu.gcr.io/life-health-app-staging/life-health-graph-prod
	