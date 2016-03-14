REPORTER ?= spec

test-unit:
	 node --harmony ./node_modules/.bin/mocha \
    --compilers js:babel/register \
    --reporter $(REPORTER) \
    test/*.js \
    --growl \
    test/*.js

test :  babel test-unit

test-cov:
	@COV=1 $(MAKE) test REPORTER=html-cov > coverage.html
    
babel : ; .\node_modules\.bin\babel src --out-dir dist

clean :  ;rm -fdR dist

.PHONY: es6 babel test-unit test-cov clean
    
    
