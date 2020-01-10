# Automated k6 load testing with Github Actions
This is an example repo for how to setup k6 with Github Actions to build load testing into an automation flow.

Examples:
- Local test run on ubuntu-latest (k6 installed with docker) [basic.yml](.github/workflows/basic.yml)
- Local test run using env vars on ubuntu-latest (k6 installed with docker) [env-vars.yml](.github/workflows/basic.yml)
- Local test run using js modules on ubuntu-latest (k6 installed with docker) [modules.yml](.github/workflows/modules.yml)
- Cloud test run using secrets on ubuntu-latest (k6 installed with docker) [cloud.yml](.github/workflows/cloud.yml)
- Local test run on macOs (k6 installed with homebrew) [macos.yml](.github/workflows/macos.yml)
- Local test run on windows (k6 downloaded as release binary) [windows.yml](.github/workflows/windows.yml)

More complex examples could be combined from the basic examples from the list above.

Note: It is still under discussion if we should create `custom action` for running k6. Examples above use just basic 2 step processes: first step is to download and install k6 and second step is to run k6 test. Usage of a custom github action could hide first step, but it is not a significant improvement. The downside is that implementing k6 custom github action we have to explicitly define it's inputs and outputs, so it will be either rewriting of k6 cli or implementing limited version of k6 cli. Both options look worse compared to the flexible `run: k6 ...` command.

The full guide describing how to use this repository is located [here](https://blog.loadimpact.com/load-testing-using-github-actions).
