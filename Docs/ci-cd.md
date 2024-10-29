# CI/CD Pipeline Documentation 📈

This document outlines the Continuous Integration and Continuous Deployment (CI/CD) pipeline for the project using GitHub Actions.

## Overview 🌟

The CI/CD pipeline automates the processes of building, testing, and deploying the project. It consists of three main jobs:

1. **Build**: Compiles the library and builds Storybook.
2. **Deploy**: Deploys the built Storybook and library to Vercel.
3. **Publish**: Publishes the library to NPM.

## Workflow Trigger 🚦

The pipeline is triggered on:

- **Pull Requests**: To any branch.
- **Pushes**: To the `main` branch.

## Jobs 🛠️

### 1. Build Job 🏗️

This job runs on Windows and includes the following steps:

- **Checkout Code**: Retrieves the latest code from the repository.
- **Set up Node.js**: Installs the latest Node.js LTS version and caches npm modules.
- **Install Dependencies**: Installs all necessary project dependencies.
- **Build Library with Rollup**: Executes the build script to compile the library.
- **Build Storybook**: Generates static files for Storybook.
- **List Project Directory**: Displays the contents of the project directory for verification.
- **List Build Output**: Checks if the `storybook-static` directory exists.
- **Change Permissions for Storybook Build**: Grants full permissions to the `storybook-static` directory.
- **Upload Storybook Artifacts**: Uploads the generated Storybook static files as artifacts.
- **Upload Built Library Artifact**: Uploads the built library files as artifacts.

### 2. Deploy to Vercel (Development) 🌐

This job is dependent on the `build` job and runs on Windows. It executes the following steps:

- **Download Storybook Artifacts**: Retrieves the previously uploaded Storybook static files.
- **List Downloaded Artifacts**: Displays the contents of the current directory to verify the download.
- **Install Vercel CLI**: Installs the Vercel CLI globally.
- **Deploy to Vercel (Production)**: Deploys the application to Vercel using the Vercel token and team token stored in GitHub Secrets.

### 3. Deploy to Vercel (Production) 🚀

This job is similar to the development deployment but runs only on pushes to the `main` branch. It includes:

- **Download Storybook Artifacts**: Retrieves Storybook artifacts.
- **List Downloaded Artifacts**: Displays the downloaded files.
- **Install Vercel CLI**: Installs the Vercel CLI.
- **Deploy to Vercel (Production)**: Deploys to Vercel in production mode using the specified tokens.

### 4. Publish to NPM 📦

This job runs on pushes to the `main` branch and includes the following steps:

- **Checkout Code**: Retrieves the latest code.
- **Set up Node.js**: Installs Node.js LTS.
- **Install Dependencies**: Installs project dependencies.
- **Build Library**: Compiles the library.
- **Configure npm for Publishing**: Sets up npm configuration to prepare for publishing, including authenticating with the npm registry.
- **Publish to npm**: Publishes the library to the npm registry.

## Secrets Configuration 🔐

Ensure the following secrets are set up in your GitHub repository settings:

- `VERCEL_TOKEN`: Your Vercel authentication token.
- `TEAM_TOKEN`: Your Vercel team token (if applicable).
- `NPM_TOKEN`: Your npm authentication token.

## Conclusion 🏁

This CI/CD pipeline efficiently automates the build, deployment, and publishing processes, ensuring that the latest code changes are quickly reflected in the deployed applications and available packages. By utilizing GitHub Actions, we can maintain a smooth and effective workflow for our project.
