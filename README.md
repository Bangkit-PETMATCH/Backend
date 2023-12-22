# PetMate-Backend

PetMate-Backend is a repository that contains the backend code for the PetMate project. PetMate is a platform that provides pet search and adoption services. This repository is used to develop the backend part of the PetMate platform.

## Main Features

- **User Authentication**: Provides endpoints for user login and registration.
- **Pet Management**: Manages data for pets available for adoption, including pet information and images.
- **Pet Search**: Allows users to search for pets based on specific criteria such as pet type, age, and location.
- **Adoption Management**: Manages the pet adoption process, including adoption requests submission and approval by the pet owner.
- **Notifications**: Sends notifications to users regarding adoption status, pet data updates, and other relevant information.

## Development Process

The PetMate-Backend was developed using the following technologies:

1. **Node.js**: Node.js is a JavaScript runtime environment that allows developers to run JavaScript code outside of a web browser. It provides a rich ecosystem of libraries and frameworks for building server-side applications.
2. **Express**: Express is a popular web application framework for Node.js. It provides a set of features and tools for building robust and scalable web APIs.
3. **GCP Cloud Run**: GCP Cloud Run is a fully managed serverless platform provided by Google Cloud Platform (GCP). It allows developers to deploy containerized applications quickly and easily.
4. **GCP Cloud Storage**: GCP Cloud Storage is an object storage service provided by GCP. It offers scalable and durable storage for storing and retrieving large amounts of data, such as pet images.
5. **GCP Cloud SQL**: GCP Cloud SQL is a fully managed relational database service provided by GCP. It offers a managed MySQL database that can be easily integrated with Node.js applications.

The development process for PetMate-Backend involved the following steps:

1. Setting up the development environment: Install Node.js and set up a local development environment on your machine.
2. Creating a new Express project: Use the Express application generator to create a new Express project structure with the necessary boilerplate code.
3. Defining the data models: Define the data models for pets, users, and adoption requests using JavaScript classes or database schemas.
4. Implementing the API endpoints: Create API endpoints using Express routing to handle user authentication, pet management, pet search, and adoption management functionalities.
5. Integrating with GCP services: Use the appropriate GCP SDKs or libraries to integrate with Cloud Run, Cloud Storage, and Cloud SQL. Set up the necessary configurations and credentials to establish connections with these services.
6. Testing and debugging: Write unit tests and integration tests to ensure the correctness of the implemented functionalities. Use debugging tools and techniques to identify and fix any issues or errors.
7. Deployment to GCP Cloud Run: Use the GCP Cloud Run CLI or web interface to deploy the backend application to a Cloud Run service. Set up the necessary environment variables and configurations for the deployed service.
8. Integration testing: Perform integration testing to ensure that the deployed backend application works correctly with other components of the PetMate platform, such as the frontend application.
9. Monitoring and maintenance: Set up monitoring tools and alerts to track the performance and health of the backend application. Perform regular maintenance tasks, such as updating dependencies and applying security patches.

## License

This repository is licensed under the [MIT License](https://opensource.org/licenses/MIT).
