SHELL := /bin/bash
include .env

runall: runauth runtodo

runauth:
	cp .env.dev .env
	source .env
	sls offline start --stage dev --app auth --port 8080 --wsport 4001 --lmport 4002 --skipCacheInvalidation

runtodo:
	cp .env.dev .env
	source .env
	sls offline start --stage dev --app todo --port 8081 --wsport 4003 --lmport 4004 --skipCacheInvalidation

deployDev:
	cp .env.dev .env
	sls deploy --stage dev --app auth
	sls deploy --stage dev --app todo

deployProd:
	cp .env.prod .env
	sls deploy --stage prod --app auth
	sls deploy --stage prod --app todo

.PHONY: runall
.PHONY: runauth
.PHONY: runtodo
.PHONY: deployDev
.PHONY: deployProd
