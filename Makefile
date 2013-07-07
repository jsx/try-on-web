
update:
	git pull --rebase
	git submodule update --init --recursive
	cd JSX && git fetch && git checkout origin/master && git clean -dfx && make
	rm -rf build source-map t assets example lib src
	cp -r JSX/try/* .
	perl -i -pe 's/"try"/"try-on-web"/' tree.generated.json
	@echo build finished!

ship:
	git add -A .
	git commit -m "update"
	git push origin gh-pages

publish: ship
