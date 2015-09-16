REPORTER ?= spec

es6 : babel

test-unit:
	mocha \
    --compilers js:babel/register \
    --reporter $(REPORTER) \
    test/*.js \
    --growl \
    test/*.js

test :  es6 test-unit

test-cov:
	@COV=1 $(MAKE) test REPORTER=html-cov > coverage.html
    
babel :  ;babel src --out-dir dist

clean :  ;rm -fdR dist

.PHONY: es6 babel test-unit test-cov clean
    
    
