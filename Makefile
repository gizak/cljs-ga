.PHONY: build

build:
	lein cljsbuild once ga2-dev
	open build/index.html

watch:
	lein cljsbuild auto ga2-dev
	open build/index.html

product:
