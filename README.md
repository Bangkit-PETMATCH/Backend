# PetMate-Backend

PetMate-Backend is a repository that contains the backend code for the PetMate project. PetMate is a platform that provides pet search and adoption services. This repository is used to develop the backend part of the PetMate platform.

## Main Features

- **User Authentication**: Provides endpoints for user login and account registration.
- **User Profile**: Allows users to manage their profiles, including updating personal information and profile pictures.
- **Pet Articles**: Displays articles about pets, including information on pet care, training, and health.
- **Recommendation Engine**: Provides an endpoint to connect the ML model to the main API for generating pet recommendations based on user preferences.

## Development Process

The PetMate-Backend was developed using Node.js and the Express framework. It leverages several Google Cloud Platform (GCP) services, including Cloud Run, Cloud Storage, and Cloud SQL.

The development process for PetMate-Backend involved the following steps:

1. Setting up the development environment: Install Node.js and set up a local development environment on your machine.
2. Creating a new Express project: Use the Express application generator to create a new Express project structure with the necessary boilerplate code.
3. Defining the data models: Define the data models for users, profiles, articles, and pet recommendations using JavaScript classes or database schemas.
4. Implementing user authentication: Create API endpoints for user login and account registration. Implement authentication logic using secure methods such as password hashing and token-based authentication.
5. User Profile management: Develop API endpoints for managing user profiles, including updating personal information and profile pictures.
6. Pet Articles: Implement API endpoints to retrieve and display articles about pets. Store the articles in a database or fetch them from an external source.
7. Recommendation Engine: Create an API endpoint that connects the ML model to the main API. This endpoint receives user preferences as input, utilizes the ML model to generate pet recommendations, and returns the recommendations as a response.
8. Integration testing: Write unit tests and integration tests to ensure the correctness of the implemented functionalities. Test the API endpoints using Postman.
9. Deployment to GCP Cloud Run: Use the GCP Cloud Run CLI or web interface to deploy the backend application to a Cloud Run service. Set up the necessary environment variables and configurations for the deployed service.



## License

This repository is licensed under the [MIT License](https://opensource.org/licenses/MIT).
