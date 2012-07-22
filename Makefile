
update:
	git submodule update --init
	cd JSX && git fetch && git checkout origin/master && make setup && make web
	cp -r JSX/try/* .
	perl -i -pe 's/"try"/"try-on-web"/' tree.generated.json
	node -e 'global.location = {}; global.window = { addEventListener: function(){} }; require("./build/jsx-compiler.js")'
	@echo build finished!

ship:
	git add .
	git commit -m "update"
	git push origin gh-pages

