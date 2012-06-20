
try:
	git submodule update
	cd JSX && make setup && make web
	cp -r JSX/try/* .
