# Automated k6 load testing with Github Actions

This is an example repo for how to setup k6 with Github Actions to build load testing into an automation flow.

Examples:

| File                                                             | Description                                                                            |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [.github/workflows/basic.yml](.github/workflows/basic.yml)       | Runs on ubuntu-latest using the marketplace action                                     |
| [.github/workflows/env-vars.yml](.github/workflows/env-vars.yml) | Runs on ubuntu-latest, with env vars, using the marketplace action                     |
| [.github/workflows/modules.yml](.github/workflows/modules.yml)   | Runs on ubuntu-latest, with js modules, using the marketplace action                   |
| [.github/workflows/cloud.yml](.github/workflows/cloud.yml)       | Runs in the k6 cloud, using the marketplace action                                     |
| [.github/workflows/macos.yml](.github/workflows/macos.yml)       | Runs on macOS, using k6 installed with hombrew                                         |
| [.github/workflows/windows.yml](.github/workflows/windows.yml)   | Runs on windows, using the downloaded k6 release binary                                |
| [.github/workflows/docker.yml](.github/workflows/docker.yml)     | Runs on ubuntu-latest, in a docker container created from the official k6 docker image |

More complex examples could be combined from the basic examples from the list above.

The full guide describing how to use this repository is located [here](https://blog.loadimpact.com/load-testing-using-github-actions).
