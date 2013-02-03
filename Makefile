
update:
	git pull --rebase
	git submodule update --init --recursive
	cd JSX && git fetch && git checkout origin/master && git clean -dfx && make
	cp -r JSX/try/* .
	perl -i -pe 's/"try"/"try-on-web"/' tree.generated.json
	@echo build finished!

ship:
	git add .
	git commit -m "update"
	git push origin gh-pages

