#!/bin/bash
shopt -s globstar

while getopts "t:f:" flag; do
  case $flag in
  t) TESTS="$OPTARG" ;;
  f) FLAGS="$OPTARG" ;;
  esac
done

echo "Running tests: $TESTS with flags: $FLAGS"

for test in $TESTS; do
	k6 run $FLAGS "$test"

	exit_code=$?
	if [ $exit_code -ne 0 ]; then
		exit $exit_code
	fi
done