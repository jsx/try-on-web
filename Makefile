
try:
	git submodule update
	cd JSX && git fetch && git checkout origin/master && make setup && make web
	cp -r JSX/try/* .
	perl -i -pe 's/"try"/"try-on-web"/' tree.generated.json

